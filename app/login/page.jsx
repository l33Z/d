'use client'

import { CustomInput, RoundedButton } from '@/components/common/custom-components'
import { validateSchema } from '@/helpers/schema-validation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import Cookies from 'universal-cookie';
import { Toast } from '@/components/common/use-toast'
import { useQuery, useMutation } from 'react-query'
import getAwsAuthCredetial from '@/services/get-aws-credentials'
import { Amplify, Auth } from 'aws-amplify'
import loginUser from '@/services/login/login'
import generateToken from '@/services/generate-token'


export default function Login() {


    // const { isLoading, error, data } = useQuery('awsAuthCredentials', () => getAwsAuthCredetial())
    // const { isLoading, error, data, mutate: getAuthCredentials } = useMutation('awsAuthCredentials', () => getAwsAuthCredetial())
    // const { mutate: getAuthCredentials } = useMutation({
    //     mutationKey: 'awsAuthCredentials',
    //     mutationFn: getAwsAuthCredetial,
    // })

    // // const { isLoading: forAwsLoading, error: forAwsError, data: logeedUserData, mutateAsync: awsLoginUser } = useMutation('loginUser', () => loginUser())
    // const { mutate: verfiyToken } = useMutation({
    //     mutationKey: 'loginUser',
    //     mutationFn: loginUser,
    // })

    // useEffect(() => {
    //     getAuthCredentials({}, {
    //         onSuccess: (data) => Amplify.configure({
    //             Auth: {
    //                 identityPoolId: data?.data.identity_poolid,
    //                 region: data?.data.region,
    //                 userPoolId: data?.data.user_poolid,
    //                 userPoolWebClientId: data?.data.user_poolwebclientid,
    //             }
    //         }),
    //         onError: (err) => {
    //             console.log(err);
    //             Toast.error("Somthing went wrong !!")
    //         }
    //     })
    // }, [])

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isActionCalling, setIsActionCalling] = useState(false)

    const ValidatForm = async () => {
        const schema = yup.object().shape({
            email: yup.string().email('Enter a valid email !').required('Email is required !'),
            password: yup.string().min(6, "Minimum 6 characters required").required('Password is required !'),
        })
        const payload = {
            email,
            password,
        }

        const isValid = await validateSchema(payload, schema)
        setErrors(isValid)

        // if (isValid === true) handleAwsLogin(email, password)
        if (isValid === true) handleLogin()
    }

    // const handleAwsLogin = async (username, password) => {
    //     try {
    //         setIsActionCalling(true)
    //         const user = await Auth.signIn(username, password)
    //         console.log(user);
    //         localStorage.setItem('accessToken', user.signInUserSession.idToken.jwtToken)
    //         const expireTokenDate = new Date(user.signInUserSession.idToken.payload.exp * 1000).toISOString()
    //         localStorage.setItem('expireAwsTokenDate', expireTokenDate)
    //         verfiyToken(user.signInUserSession.accessToken.jwtToken, {
    //             onSuccess: (data) => {
    //                 console.log("verify user data", data);
    //                 if (data.user.email === email) {
    //                     Toast.success('Login Successfully !')
    //                     const cookies = new Cookies();
    //                     cookies.set('is_logged_in', 'true', { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });

    //                     setTimeout(() => {
    //                         router.push("/home")
    //                     }, 2000);
    //                 }
    //             },
    //             onError: (err) => {
    //                 console.log(err);
    //                 Toast.error("Somthing went wrong !!")
    //             }
    //         })
    //         setIsActionCalling(false)
    //     }
    //     catch (e) {
    //         setIsActionCalling(false)
    //         Toast.error(e.message)
    //         console.log(e);
    //     }

    // }

    const handleLogin = () => {
        setIsActionCalling(true)
        if (email === 'zx@gmail.com' && password === '123456') {
            Toast.success('Login Successfully !')
            const cookies = new Cookies();
            cookies.set('is_logged_in', 'true', { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
            setTimeout(() => {
                setIsActionCalling(false)
                router.push("/home")
            }, 2000);
        }
        else {
            setTimeout(() => {
                setIsActionCalling(false)
                Toast.error("Incorrect username & password !!")
            }, 2000);
        }
    }

    // if (isLoading) {
    //     return <div className='flex items-center justify-center min-h-screen'>Loading...</div>
    // }


    return (

        <main className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center w-[85%] max-w-[450px]'>
                <Image src='/passLogo.png' width={197} height={105} alt='PASS' />
                <CustomInput placeholder='Email Address *' startIcon={<i className="ri-user-line ri-lg text-blue_icon_color"></i>} baseClassName="mt-12" value={email} onChange={setEmail} error={errors.email} onFocus={() => setErrors({ ...errors, email: '' })} />
                <CustomInput placeholder='Password *' startIcon={<i className="ri-lock-line ri-lg text-blue_icon_color"></i>} baseClassName="mt-2" value={password} onChange={setPassword} error={errors.password} onFocus={() => setErrors({ ...errors, password: '' })} />
                <RoundedButton text={'SIGN IN'} baseClassName='my-4' onClick={ValidatForm} loadingText='SIGNING IN...' loading={isActionCalling} />
                <Link href="/forgot-password" className='font-medium text-blue_base'>Forgot Password ?</Link>
                <p className='absolute text-[13px] bottom-8 text-[#55555580] font-semibold'>App Version :  1.0</p>
            </div>
        </main>
    )
}

