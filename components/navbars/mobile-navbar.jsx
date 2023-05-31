'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'

const MobileNavBar = ({ titleName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    const cookies = new Cookies()
    cookies.remove('is_logged_in', { path: '/' })
    router.replace("/")
    router.refresh()
  }

  const Links = [
    {
      id: 1,
      name: 'Home',
      path: '/home',
      onClick: () => router.push('/home'),
      icon: 'ri-dashboard-line',
    },
    {
      id: 2,
      name: 'Bids',
      path: '/bids',
      onClick: () => router.push('/bids'),
      icon: 'ri-dual-sim-1-line',
    },
    {
      id: 3,
      name: 'Reports',
      path: '/reports',
      onClick: () => router.push('/reports'),
      icon: 'ri-file-chart-line',
    },
    {
      id: 4,
      name: 'Logout',
      path: '/logout',
      onClick: () => handleLogout(),
      icon: 'ri-error-warning-line',
    },
  ]
  return (
    <div className='relative flex flex-col justify-between w-full '>
      <div className='flex items-center justify-center w-full h-16 bg-blue_base'>
        {/* <div className='flex items-center justify-between h-20 p-3'>
          <Image src='/logo.png' alt='PASS' width={80} height={80} />
          <h2 className='ml-2 text-xl font-semibold text-white '>Pass</h2>
        </div> */}
        <h1 className='text-xl font-medium text-center text-white'>{titleName}</h1>

        <div className='absolute text-white left-3' onClick={() => setIsOpen(true)}>
          {!isOpen && <i className='ri-menu-line ri-xl '></i>}
        </div>
        <div className='absolute text-white right-3' onClick={() => setIsOpen(false)}>
          {isOpen && <i className='ri-close-fill ri-2x'></i>}
        </div>
      </div>

      <div className={`w-[80%] h-screen bg-white shadow-lg  ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 z-40`} >

        <div className='flex items-center h-16 p-3 bg-blue_base'>
          <Image src='/logo.png' alt='PASS' width={80} height={80} />
          <h2 className='ml-2 text-xl font-semibold text-white '>Pass</h2>
        </div>

        <div className='flex items-center bg-[#F5F5F5] p-2'>
          <p className='max-h-10 max-w-10 min-h-10 min-w-10 h-10 w-10 mx-3  aspect-square text-base text-white bg-blue_base rounded-[50%] flex justify-center items-center font-semibold'>J</p>
          <div className='w-full'>
            <h3 className='pb-1 ml-5 font-medium border-b-2'>Jack Smith</h3>
            <p className='mt-1 ml-5 text-sm text-gray-500'>
              <i className='mr-2 ri-mail-fill'></i> jack.smith@gmail.com
            </p>
            <p className='mt-1 ml-5 text-sm text-gray-500'>
              <i className='mr-2 ri-map-pin-2-fill'></i> Store 1
            </p>
            <p className='mt-1 ml-5 text-sm text-gray-500'>
              <i className='mr-2 ri-user-3-fill'></i> Bidder
            </p>
          </div>
        </div>
        <div className='mt-2'>
          {Links.map(link => {
            return (
              <div className={`flex items-center p-2 mt-1.5 cursor-pointer px-5 hover:bg-onHover  ${pathName === link.path ? 'bg-onHover' : ''}`} key={link.id} onClick={link.onClick}>
                <i className={`${link.icon} ri-lg text-[#474747]`}></i>
                <h2 className='ml-4 text-base font-medium text-[#474747]'>{link.name}</h2>
              </div>
            )
          })}
        </div>
        <p className='absolute text-sm bottom-5 left-5 text-[#555555] font-semibold'>App Version :  1.0</p>
      </div>
    </div >
  )
}

export default MobileNavBar
