import URL from '@/constants/api-urls'
import generateToken from '../generate-token'

// export default function loginUser(token) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const orToken = await generateToken()
//       console.log('orToken', orToken)
//       const apiUrl = `${URL.BASE}${URL.decodeAccessTokenSerializers}`
//       console.log('token', token)
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Bearer: orToken },
//         body: JSON.stringify({ access_token: token }),
//       })
//       console.log(response)
//       const data = await response.json()
//       resolve(data)
//     } catch (e) {
//       console.log(e)
//       reject('Network error')
//     }
//   })
// }

export default async function loginUser(token) {
  const apiUrl = `${URL.BASE}${URL.decodeAccessTokenSerializers}`
  const idToken = await generateToken()
  console.log('token', token)
  console.log('idToken', idToken)

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
    body: JSON.stringify({ access_token: token }),
  })
  const data = await response.json()
  return data
}
