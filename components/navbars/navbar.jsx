'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { startCase } from 'lodash'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  const dropDownMenuRef = useRef(null)
  const router = useRouter()

  const handleLogout = () => {
    const cookies = new Cookies()
    cookies.remove('is_logged_in', { path: '/' })
    router.replace("/")
    router.refresh()
  }

  const handleClickOutside = event => {
    if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(event.target)) setIsOpen(false)
  }

  useEffect(() => {
    const rootPathName = startCase(pathName.split('/')[1])
    // document.title = 'PASS | ' + rootPathName
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [])

  return (
    <div className='px-3 bg-blue_base fixed top-0 left-[250px] w-[calc(100vw_-_250px)] flex items-center justify-between h-14 z-10'>
      <p className='text-base font-semibold text-white'>{startCase(pathName.split('/')[1])}</p>

      <div className='flex items-center'>
        <div className='flex items-center'>
          <i className='text-white ri-account-circle-line ri-lg'></i>
          <p className='ml-2 text-sm font-normal text-white'>Bidder</p>
        </div>
        <div className='relative mx-3'>
          <p className='h-8 w-8 text-base bg-white rounded-[50%] flex justify-center items-center cursor-pointer font-semibold' onClick={() => setIsOpen(!isOpen)}>
            J
          </p>
          {isOpen && (
            <div className='absolute right-[-15px] flex flex-col w-48  bg-white rounded-md shadow-2xl top-12 arrowUp' ref={dropDownMenuRef}>
              <Link href='/home' className='p-1.5 pl-4 text-sm font-medium border-b-2 text-blue_base'>
                Jack Smith
              </Link>
              <Link href='/home' className='p-1.5 pl-4 text-sm font-medium border-b-2'>
                Profile
              </Link>
              <p className='p-1.5 pl-4 text-sm font-medium cursor-pointer' onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
