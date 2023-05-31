'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const BidCard = ({ data }) => {
  const router = useRouter()

  const { id, name, type, vin, channel, amount } = data

  return (
    <div className='w-full text-sm bg-white border border-b-2-[#838383] mb-2 flex '>
      <div className='py-5 pl-3 w-[90%] text-[13px] '>
        <h2 className='font-medium'>{id}</h2>
        <div className='mt-1.5'>
          <p className='font-medium'>
            Bidder Name: <span className='font-normal text-[#5e5e5e]'>{name}</span>
          </p>
        </div>
        <div className='flex items-center mt-1.5'>
          <p className='w-3/5 font-medium'>
            Bidder Type: <span className='font-normal text-[#5e5e5e]'>{type}</span>
          </p>
          <p className='w-2/5 font-medium'>
            VIN: <span className='font-normal text-[#5e5e5e]'>{vin}</span>
          </p>
        </div>
        <div className='flex items-center mt-1.5'>
          <p className='w-3/5 font-medium'>
            Bidder Type: <span className='font-normal text-[#5e5e5e]'>{channel}</span>
          </p>
          <p className='w-2/5 font-medium'>
            Amount - <span className='font-normal text-[#5e5e5e]'>${amount}</span>
          </p>
        </div>
      </div>

      <div className=' w-[10%] flex justify-center items-center' onClick={() => router.push('/bids/11')}>
        <i className='ri-arrow-right-s-line ri-2x text-[#4d4d4d]'></i>
      </div>
    </div>
  )
}

export const VehicalDetailsCard = ({ data }) => {
  const { make, model, year, vin, trim } = data

  return (
    <div className='w-full p-5 text-sm bg-white border border-b-2-[#838383] mb-2  '>
      <h2 className='text-base font-semibold'>Vehical Detail</h2>
      <div className='mt-1.5'>
        <p className='font-medium'>
          VIN: <span className='font-normal text-[#5e5e5e]'>{vin}</span>
        </p>
      </div>
      <div className='flex items-center mt-1.5'>
        <p className='w-3/5 font-medium'>
          Make: <span className='font-normal text-[#5e5e5e]'>{make}</span>
        </p>
        <p className='w-2/5 font-medium'>
          Model: <span className='font-normal text-[#5e5e5e]'>{model}</span>
        </p>
      </div>
      <div className='flex items-center mt-1.5'>
        <p className='w-3/5 font-medium'>
          Year: <span className='font-normal text-[#5e5e5e]'>{year}</span>
        </p>
        <p className='w-2/5 font-medium'>
          Trim: <span className='font-normal text-[#5e5e5e]'>{trim}</span>
        </p>
      </div>
    </div>
  )
}

export const OtherDetailsCard = ({ title, amount, noCheckBox, checked, children }) => {
  const [isChecked, setIsChecked] = useState(checked || false)
  return (
    <div className='w-full py-3 p-5 text-sm bg-white border border-b-2-[#838383] mb-2  '>
      <div className='flex items-center justify-between'>
        <h2 className='text-base font-semibold'>{title}</h2>
        <div className='flex items-center'>
          <h2 className='text-base font-semibold'>
            Value: <span>${amount}</span>
          </h2>
          {!noCheckBox && <input type='checkbox' className='w-4 h-4 ml-4 ' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />}
        </div>
      </div>
      <div className='mt-1.5'>{isChecked && children}</div>
    </div>
  )
}
