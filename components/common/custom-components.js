'use client'

import { useState, useRef, useEffect } from 'react'
import { MinimalButton } from './components'
import '@/components/common/assets.css'

export const CustomInput = ({ error, value, startIcon = false, onChange = () => {}, baseClassName, inputClassName, ...props }) => {
  const isError = error && error.error === true

  return (
    <div className={`mb-3.5 w-full customInput ${baseClassName}`}>
      <div className={`border-b-[1px] flex items-center w-full ${isError ? 'border-red-600' : 'border-black'} border-black`}>
        {startIcon && startIcon}
        <input className={`w-full p-3 pl-4 text-sm font-medium text-black bg-white outline-none placeholder:placeholder_text placeholder:font-light placeholder:text-sm  ${inputClassName} `} value={value} onChange={e => onChange(e.target.value)} {...props} required />
      </div>
      {isError && <span className='error-msg'>{error.msg}</span>}
    </div>
  )
}

// export const RoundedButton = ({ text, style, baseClassName, ...props }) => {
//   return (
//     <button className={`w-36 p-2 text-white bg-blue_base rounded-3xl ${baseClassName}`} style={style} {...props}>
//       {text}
//     </button>
//   )
// }

export const RoundedButton = ({ text, style, baseClassName, loading, loadingText, ...props }) => {
  return (
    <button className={`w-36 justify-center roundedBtn  flex items-center p-2 text-white bg-blue_base rounded-3xl ${baseClassName}`} style={style} {...props} disabled={loading}>
      {loading && loadingText ? loadingText : text}
      {loading && (
        <svg aria-hidden='true' role='status' className='inline w-4 h-4 ml-3 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='#E5E7EB'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentColor'
          />
        </svg>
      )}{' '}
    </button>
  )
}

export const FormSection = ({ title, children, style, notExpandable = false, keepOpen, baseMargin, value = false, id = null }) => {
  const [expand, setExpand] = useState(keepOpen || notExpandable)
  return (
    <div style={style} id={id} className='bg-white rounded'>
      <div style={{ borderRadius: '5px', border: '1px solid #c9c9c9', marginBottom: baseMargin ? '0' : '10px', transition: `box-shadow 1s` }}>
        <div
          onClick={() => {
            if (notExpandable) setExpand(true)
            else setExpand(!expand)
          }}
          className='flex items-center justify-between w-full '
          style={{ padding: '10px ', borderRadius: '5px 5px 0 0', borderBottom: expand ? '1px solid #c9c9c9' : 'none', cursor: !notExpandable ? 'pointer' : '' }}
        >
          <strong style={{ fontSize: '14px', marginLeft: '0px' }}>{title}</strong>
          {!notExpandable && (
            <div className='flex'>
              {value && (
                <div className='flex items-center mr-2'>
                  <p className='mr-1 text-sm font-bold'>Value:</p>
                  <p className='text-sm'>${value}</p>
                </div>
              )}
              <i className={` ${!expand ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'} bg-blue_base ri-xl text-white p-1 rounded-[50%] aspect-square flex items-center justify-center`}></i>
            </div>
          )}
        </div>
        <div style={{ padding: '10px' }} className={`${expand ? 'block' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const Drawer = ({ isForAction = false, children, onClose = () => {}, onCancel = () => {}, onSuccess = () => {} }) => {
  const drawerRef = useRef(null)

  const handleClickOutside = event => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) onClose()
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [])

  return (
    <div className='fixed top-0 left-0 z-40 w-full min-h-screen bg-[#00000077]'>
      <div ref={drawerRef}>
        <div className='fixed p-top-0 right-0 max-h-screen min-h-screen w-[450px] z-50 bg-[#efefef] overflow-y-scroll' id='style-1'>
          {children}
        </div>
        {isForAction && (
          <div className='fixed bottom-0 right-0 flex items-center z-50 justify-between w-[450px] p-2.5 bg-white border-t border-[#c9c9c9]'>
            <MinimalButton text='Cancel' style={{ backgroundColor: '#e1e1e1', color: 'black', paddingLeft: '30px', paddingRight: '30px' }} onClick={onCancel} />
            <MinimalButton text='Create Channel' onClick={onSuccess} />
          </div>
        )}
      </div>
    </div>
  )
}
