import axios from 'axios'
import URL from '@/constants/api-urls'
import generateToken from '@/services/generate-token'
import isTokenValid from '@/helpers/valid-token'
import getCompanyCode from '@/helpers/get-domain-name'

function postApiCall(url, requestData, responseType = 'json', token) {
  return new Promise((resolve, reject) => {
    var apiUrl = URL.BASE + url
    const request = axios({
      method: 'POST',
      url: apiUrl,
      data: requestData,
      responseType: responseType,
      // timeout:1000000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
        domain_name: getCompanyCode(),
        appbrand: 2,
      },
    })
    request
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        if (error.request.response !== '') {
          const { status } = error.request
          if (status === 401 || status === 403) {
            localStorage.clear()
            localStorage.setItem('domainName', getCompanyCode())
            history.push('/login')
          }
        }
        reject('Network Error')
      })
  })
}

export default function post(url, requestData, responseType = 'json') {
  return new Promise((resolve, reject) => {
    var isTokenExpire = isTokenValid()
    if (isTokenExpire) {
      generateToken()
        .then(response => {
          postApiCall(url, requestData, (responseType = 'json'), response)
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject('Network Error')
            })
        })
        .catch(error => {
          reject('Network Error')
        })
    } else {
      postApiCall(url, requestData, (responseType = 'json'), localStorage.getItem('accessToken'))
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject('Network Error')
        })
    }
  })
}
