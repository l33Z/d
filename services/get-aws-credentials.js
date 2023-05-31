import URL from '@/constants/api-urls'
import getCompanyCode from '@/helpers/get-domain-name'

// export default async function getAwsAuthCredetial() {
//   const companyCode = getCompanyCode()
//   const apiUrl = `${URL.BASE}${URL.getAwsAuthCredetials}`

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ code: companyCode }),
//     })
//     const data = await response.json()
//     return data
//   } catch (err) {
//     console.log(err)
//     return err
//   }
// }

export default async function getAwsAuthCredetial() {
  const companyCode = getCompanyCode()
  const apiUrl = `${URL.BASE}${URL.getAwsAuthCredetials}`

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: companyCode }),
  })

  const data = await response.json()
  return data
}
