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
import { MinimalInput, MinimalButton } from '@/components/common/components'


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



    const inputCustomStyles = {
        fontWeight: '500',
        borderRadius: '5px',
        backgroundColor: '#fff',
        border: '2px solid #d1d1d1',
        outline: "none"
    }



    return (

        <main className='flex items-center justify-center min-h-screen bigTablet:bg-[#f9f9f9] '>
            <div className='flex flex-col items-center justify-center w-[85%] max-w-[441px]'>
                <Image src='/passLogo.png' width={197} height={105} alt='PASS' />

                <div className='flex flex-col items-center w-full bigTablet:hidden'>
                    <CustomInput placeholder='Email Address *' startIcon={<i className="ri-user-line ri-lg text-blue_icon_color"></i>} baseClassName="mt-12" value={email} onChange={setEmail} error={errors.email} onFocus={() => setErrors({ ...errors, email: '' })} />
                    <CustomInput placeholder='Password *' type='password' startIcon={<i className="ri-lock-line ri-lg text-blue_icon_color"></i>} baseClassName="mt-2" value={password} onChange={setPassword} error={errors.password} onFocus={() => setErrors({ ...errors, password: '' })} />
                    <RoundedButton text={'SIGN IN'} baseClassName='my-4' onClick={ValidatForm} loadingText='SIGNING IN...' loading={isActionCalling} />
                </div>

                <div className='hidden w-full bigTablet:block'>
                    <MinimalInput label='Email Address' value={email} placeholder='Enter Email' onChange={setEmail} type='email' error={errors.email} onFocus={() => setErrors({ ...errors, email: '' })} w='100' InputStyles={inputCustomStyles} />
                    <MinimalInput label='Password' value={password} placeholder='Enter Password' onChange={setPassword} type='password' error={errors.password} onFocus={() => setErrors({ ...errors, password: '' })} w='100' InputStyles={inputCustomStyles} />
                    <MinimalButton text='SIGN IN' loading={isActionCalling} loadingText='SIGNING IN...' disabled={isActionCalling} baseClassName={'my-4 p-3 w-full'} onClick={ValidatForm} />
                </div>

                <Link href="/forgot-password" className='font-medium bigTablet:ml-auto bigTablet:text-sm bigTablet:leading-4 bigTablet:block text-blue_base bigTablet:w-max'>
                    Forgot Password ?
                </Link>
                <p className='absolute text-[13px] bottom-8 text-[#55555580] font-semibold bigTablet:hidden'>App Version :  1.0</p>
            </div>
        </main>
    )
}



