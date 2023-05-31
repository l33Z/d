"use client"

import { RoundedButton } from '@/components/common/custom-components'
import { OtherDetailsCard, VehicalDetailsCard } from '@/components/bids/components'
import { useRouter } from 'next/navigation'
import RedirectNavbar from '@/components/navbars/redirect-navbar'


export default function BidDetail() {

    const router = useRouter()

    const data = {
        vin: "1HGCM82633A4352",
        make: "Honda",
        model: "Accord",
        year: "2003",
        trim: "LX"
    }

    return (
        <div className='flex flex-col justify-center w-full min-h-screen bg-[#e5e5e5]'>
            <RedirectNavbar titleName={"Bid Details"} revertPath={"/bids"} />

            <div className='min-h-[calc(100vh_-_64px)] flex flex-col items-center '>

                <VehicalDetailsCard data={data} />
                <OtherDetailsCard title="Scrap" amount={350} checked>
                    <h2 className='font-medium'>Weights: <span className='text-[#5e5e5e]'>
                        3700Lbs
                    </span>
                    </h2>
                </OtherDetailsCard>
                <OtherDetailsCard title="Ctalic Converter" amount={300} checked>
                    <div className='flex'>
                        <p className='w-1/2 font-medium'>Pre: <span className='text-[#5e5e5e]'>
                            2
                        </span>
                        </p>
                        <p className='w-1/2 font-medium'>Post: <span className='text-[#5e5e5e]'>
                            2
                        </span>
                        </p>
                    </div>
                </OtherDetailsCard>
                <OtherDetailsCard title="Ally Wheels" amount={50} checked>
                    <h2 className='font-medium'>Alloy Wheels: <span className='text-[#5e5e5e]'>
                        4
                    </span>
                    </h2>
                </OtherDetailsCard>
                <OtherDetailsCard title="Battery" amount={50} checked>
                    <h2 className='font-medium'>Battery: <span className='text-[#5e5e5e]'>
                        2
                    </span>
                    </h2>
                </OtherDetailsCard>
                <OtherDetailsCard title="Wire" amount={50} checked>
                    <h2 className='font-medium'>Wire: <span className='text-[#5e5e5e]'>
                        2
                    </span>
                    </h2>
                </OtherDetailsCard>
                <OtherDetailsCard title="Margin(-10%): $80" amount={720} noCheckBox />

                <RoundedButton text="Done" baseClassName="my-6" onClick={() => { router.push("/bids") }} />
            </div>
        </div>


    )
}

