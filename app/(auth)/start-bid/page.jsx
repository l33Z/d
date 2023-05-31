"use client"

import { MinimalAutoComplete, MinimalInput } from '@/components/common/components'
import { RoundedButton } from '@/components/common/custom-components'
import RedirectNavbar from '@/components/navbars/redirect-navbar'
import { useRouter } from 'next/navigation'

const inputCustomStyles = {
    fontWeight: '500',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #272727',
    border: '2px solid #d1d1d1',
    fontSize: "14px"
}


const storeOptions = [
    { label: 'Store 1', value: 'store 1' },
    { label: 'Store 2', value: 'store 2' },
    { label: 'Store 3', value: 'store 3' },
    { label: 'Store 4', value: 'store 4' },
]

export default function StartBid() {

    const router = useRouter()


    return (
        <div className='flex flex-col items-center w-full bigTablet-breakpoint'>
            <RedirectNavbar titleName="Bid" revertPath="/home" />

            <div className='flex flex-col items-center w-full max-w-[500px] p-2 mt-3 '>
                <MinimalAutoComplete isClearable isMulti w={98} placeholder='Select Store' baseStyles={{ marginBottom: "20px" }} inputStyles={{ ...inputCustomStyles, padding: '3px' }} options={storeOptions} onChange={(v) => console.log(v)} />
                <MinimalAutoComplete isClearable w={98} placeholder='Sales Channel' baseStyles={{ marginBottom: "20px" }} inputStyles={{ ...inputCustomStyles, padding: '3px' }} options={storeOptions} onChange={(v) => console.log(v)} />
                <div className='flex items-center w-full pr-2'>
                    <MinimalInput placeholder='VIN' InputStyles={inputCustomStyles} baseStyles={{ flex: 1, margin: "0" }} />
                    <p className='mx-3 text-[10px] font-medium'>OR</p>
                    <i className="ri-qr-scan-2-line ri-2x"></i>
                </div>
                <RoundedButton text="Bid" baseClassName="mt-6" />
            </div>



        </div>

    )
}

