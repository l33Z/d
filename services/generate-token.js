import { Amplify, Auth } from 'aws-amplify'
import getAwsAuthCredetial from './get-aws-credentials'

export default async function generateToken() {
  return new Promise(async function (resolve, reject) {
    try {
      const data = await getAwsAuthCredetial()
      const authCredentilas = {
        identityPoolId: data.data.identity_poolid,
        region: data.data.region,
        userPoolId: data.data.user_poolid,
        userPoolWebClientId: data.data.user_poolwebclientid,
      }

      Amplify.configure({ Auth: authCredentilas })
      const session = await Auth.currentSession()
      // console.log('session: ', session)
      localStorage.setItem('accessToken', session.idToken.jwtToken)
      const expireTokenDate = new Date(session.idToken.payload.exp * 1000).toISOString()
      localStorage.setItem('expireAwsTokenDate', expireTokenDate)
      resolve(session.idToken.jwtToken)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
