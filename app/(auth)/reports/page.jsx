"use client"

import { MinimalAutoComplete, MinimalInput, MinimalDatePicker } from '@/components/common/components'
import { RoundedButton } from '@/components/common/custom-components'
import MobileNavBar from '@/components/navbars/mobile-navbar'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const inputCustomStyles = {
    fontWeight: '500',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #272727',
    border: '2px solid #d1d1d1',
    fontSize: "14px"
}
const lableStyles = {
    fontWeight: '500',
    marginBottom: "4px"
}

const filterOptions = [
    { label: 'Date Range', value: 'date-range' },
    { label: 'Monthly', value: 'monthly' },
]

const monthList = [{ label: "January", value: "jan" }, { label: "February", value: "fab" }, { label: "March", value: "march" }, { label: "April", value: "april" }, { label: "May", value: "may" }, { label: "June", value: "June" }, { label: "July", value: "July" }, { label: "August", value: "August" }, { label: "September", value: "September" }, { label: "October", value: "October" }, { label: "November", value: "November" }, { label: "December", value: "December" }];
const yearList = [{ label: "2023", value: "2023" }]


export default function Reports() {
    const router = useRouter()
    const [typeOfFiltering, settypeOfFiltering] = useState({ label: 'Date Range', value: 'date-range' })
    const [selectedDate, setSelectedDate] = useState(Date.now())

    return (
        <>
            <div className="block bigTablet:hidden">
                <MobileNavBar titleName={"Reports"} />
            </div>

            <div className='flex flex-col items-center bigTablet-breakpoint'>

                <div className='flex flex-col w-full items-center max-w-[500px] pl-2 mt-3 '>
                    <MinimalAutoComplete w={98} label='Select Day/Monthly' baseStyles={{ marginBottom: "16px" }} inputStyles={{ ...inputCustomStyles, padding: '3px' }} labelStyles={lableStyles} options={filterOptions} value={typeOfFiltering} onChange={settypeOfFiltering} />
                    {typeOfFiltering.value === "date-range" ? <>
                        {/* <MinimalDatePicker w={98} label='From Date' InputStyles={{ ...inputCustomStyles, padding: '3px' }} labelStyles={lableStyles} setDate={setSelectedDate} /> */}
                        {/* <MinimalDatePicker w={98} label='To Date' InputStyles={{ ...inputCustomStyles, padding: '3px' }} labelStyles={lableStyles} setDate={setSelectedDate} /> */}
                        <div className='flex flex-col w-full mb-4 '>
                            <label htmlFor="from-date" className='font-bold text-[13px] mb-1'>From Date</label>
                            <input type='date' placeholder='MM/DD/YYYY' className='border-2 border-[#d1d1d1] p-3 text-sm rounded-[5px] w-[98%] outline-none' id='from-date' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="to-date" className='font-bold text-[13px] mb-1'>To Date</label>
                            <input type='date' placeholder='MM/DD/YYYY' className='border-2 border-[#d1d1d1] p-3 text-sm rounded-[5px] w-[98%] outline-none' id='to-date' />
                        </div>
                        {/* <div className='flex flex-col w-full'>
                            <label htmlFor="to-date" className='font-bold  text-[13px]'>To Date</label>
                            <input type='text' onFocus={(e) => { console.log(e); e.target.type = "date", e.target.readOnly = false }} readOnly
                                className='border-2 border-[#d1d1d1] p-3 text-sm rounded-[5px] w-[98%]' id='to-date' placeholder='MM/DD/YYYY' />
                        </div> */}

                    </> : <div className='flex justify-between w-full'>
                        <MinimalAutoComplete w={50} label='Select Month' placeholder="MM" baseStyles={{ marginBottom: "20px" }} inputStyles={{ ...inputCustomStyles, padding: '3px' }} labelStyles={lableStyles} options={monthList} />
                        <MinimalAutoComplete w={40} label='Select Year' placeholder="YYYY" baseStyles={{ marginBottom: "20px" }} inputStyles={{ ...inputCustomStyles, padding: '3px' }} labelStyles={lableStyles} options={yearList} />
                    </div>}


                    <RoundedButton text="Generate" baseClassName="mt-6" onClick={() => {
                        typeOfFiltering.value === "monthly" ? router.push("/reports/month-wise") : router.push("/reports/date-wise")
                    }} />
                </div>
            </div>
        </>

    )
}

