'use client'

import { CustomInput, RoundedButton } from '@/components/common/custom-components'
import { MinimalInput, MinimalButton } from '@/components/common/components'
import { validateSchema } from '@/helpers/schema-validation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as yup from 'yup'

export default function ForgotPassword() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})

    const ValidatForm = async () => {
        const schema = yup.object().shape({
            email: yup.string().required('Email is required !').email('Enter a valid email !'),
        })

        const payload = {
            email,
        }

        const isValid = await validateSchema(payload, schema)
        setErrors(isValid)

        if (isValid === true) handleForgotPassword()
    }

    const handleForgotPassword = () => {
        router.push("/home")
    }

    const inputCustomStyles = {
        fontWeight: '500',
        borderRadius: '5px',
        backgroundColor: '#fff',
        border: '2px solid #d1d1d1',
        outline: "none"
    }

    return (
        <main className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center w-[85%] max-w-[441px]'>
                <Image src='/passLogo.png' width={197} height={105} alt='PASS' />
                <div className='flex flex-col items-center w-full bigTablet:hidden'>
                    <h2 className='mt-2.5 text-lg font-semibold'>FORGOT PASSWORD</h2>
                    <CustomInput placeholder='Email Address *' startIcon={<i className="ri-user-line ri-lg text-blue_icon_color"></i>} baseClassName="mt-10" value={email} onChange={setEmail} error={errors.email} onFocus={() => setErrors({ ...errors, email: '' })} />
                    <RoundedButton text={'RESET PASSWORD'} baseClassName='my-4 w-max px-8 text-sm' onClick={ValidatForm} />
                    <p className='absolute text-sm bottom-8 text-[#55555580] font-semibold'>App Version :  1.0</p>
                </div>
                <div className='flex-col items-center hidden w-full bigTablet:flex'>
                    <h4 className='my-2 text-2xl font-semibold'>Forgot Password</h4>
                    <div className="w-full">
                        <MinimalInput label='Email Address' w="100" value={email} placeholder='Enter Email' onChange={setEmail} type='email' error={errors.email} onFocus={() => setErrors({ ...errors, email: '' })} InputStyles={inputCustomStyles} />
                        <MinimalButton text='RESET PASSWORD' loadingText='RESETTING PASSWORD...' baseClassName={'mt-4 py-3 w-full'} onClick={ValidatForm} />
                    </div>
                </div>
            </div>
        </main>
    )
}

