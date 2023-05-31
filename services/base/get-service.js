import axios from 'axios'
import URL from '@/constants/api-urls'
import generateToken from '@/services/generate-token'
import isTokenValid from '@/helpers/valid-token'
import getCompanyCode from '@/helpers/get-domain-name'

function getApiCall(url, token) {
  return new Promise((resolve, reject) => {
    var apiUrl = URL.BASE + url
    const request = axios({
      method: 'GET',
      url: apiUrl,
      timeout: 100000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
        // 'x-sensaii-auth-type': 'credentials',
        // 'x-sensaii-platform-type': 'web',
        domain_name: getCompanyCode(),
        appbrand: 2,
      },
    })
    request
      .then(response => resolve(response))
      .catch(error => {
        if (error.request.response !== '') {
          const { status } = error.request
          if (status === 401 || status === 403) {
            localStorage.clear()
            localStorage.setItem('domainName', getCompanyCode())
          }
        }
        reject('Network Error')
      })
  })
}

export default function get(url) {
  return new Promise((resolve, reject) => {
    var isTokenExpire = isTokenValid()
    if (isTokenExpire) {
      generateToken()
        .then(response => {
          getApiCall(url, response)
            .then(response => resolve(response))
            .catch(error => {
              reject('Network Error')
            })
        })
        .catch(error => {
          reject('Network Error')
        })
    } else {
      getApiCall(url, localStorage.getItem('accessToken'))
        .then(response => resolve(response))
        .catch(error => {
          reject('Network Error')
        })
    }
  })
}
