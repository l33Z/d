'use client'

import { startCase } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'universal-cookie'
const SideNavbar = () => {
  const router = useRouter()
  const pathName = usePathname()
  const rootPathName = startCase(pathName.split('/')[1])

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
    <div className='w-[250px] fixed top-0 left-0 min-h-screen bg-custom_gray flex flex-col items-center'>
      <div className='p-4'>
        <Image src='/logo.png' alt='PASS' width={207} height={122} />
      </div>

      <div className='w-full mt-3 border-t border-borderGray'>
        {Links.map(link => {
          return (
            <div className={`flex items-center p-2 mt-1.5 cursor-pointer px-7 hover:bg-onHover ${rootPathName === startCase(link.path) ? 'bg-onHover' : ''}`} key={link.id} href={link.path} onClick={link.onClick}>
              <i className={`${link.icon} ri-lg text-gray-600`} key={link.key}></i>
              <h2 className='ml-6 text-sm font-medium text-gray-600' key={link.key}>
                {link.name}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideNavbar
