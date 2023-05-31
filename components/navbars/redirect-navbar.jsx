'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const RedirectNavbar = ({ titleName, revertPath }) => {
    const router = useRouter()

    return (
        <div className='sticky top-0 left-0 flex items-center justify-center w-full h-16 p-3 bg-blue_base bigTablet:hidden'>
            <h2 className='ml-2 text-xl font-medium text-center text-white '>{titleName}</h2>
            <div className='absolute text-white left-4' onClick={() => router.push(revertPath)} >
                <i className="text-white ri-arrow-left-line ri-xl"></i>
            </div>
        </div >
    )
}

export default RedirectNavbar
