"use client"

import { RoundedButton } from '@/components/common/custom-components'
import { TotalBids } from '@/components/home/components'
import MobileNavBar from '@/components/navbars/mobile-navbar'
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter()

    return (
        <>
            <div className="block bigTablet:hidden">
                <MobileNavBar titleName={"Home"} />
            </div>
            
            <div className='flex flex-col items-center bigTablet-breakpoint'>
                <div className='flex items-center justify-between w-full max-w-[500px] px-3 mt-5'>
                    <TotalBids title="Today Total Bids" count="50" baseClassName="min-w-[49%] " onClick={() => router.push("/bids")} />
                    <TotalBids title="Total Bids This Month" count="450" baseClassName="min-w-[49%] " onClick={() => router.push("/bids")} />
                </div>
                <RoundedButton text="Start Bid" baseClassName="absolute bottom-7" onClick={() => router.push("/start-bid")} />
            </div>
        </>

    )
}

