"use client"

import TableComponent from '@/components/common/table-component'
import BidDetails from '@/components/bids/bid-details'
import { BidCard } from '@/components/bids/components'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import RedirectNavbar from '@/components/navbars/redirect-navbar'


export default function Bid() {

    const router = useRouter()

    const [isBidDetailsOpen, setIsBidDetailsOpen] = useState(false)

    const columns = [
        { name: 'id', accessor: 'id' },
        { name: 'Bidder Name', accessor: 'name' },
        { name: 'Bidder Type', accessor: 'type' },
        { name: 'VIN', accessor: 'vin' },
        { name: 'Sales Channel', accessor: 'channel' },
        { name: 'Amount', accessor: 'amount' },
    ]
    let data = [
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
        {
            id: 'I-21',
            name: 'Bidder Name',
            type: 'Bidder Type',
            vin: '1235647890',
            channel: 'Sales Channel',
            amount: '840',
        },
    ]
    return (
        <div className='flex flex-col justify-center w-full min-hscrren bg-[#e5e5e5]'>

            <RedirectNavbar titleName="Bid List" revertPath="/home" />

            <div className='bigTablet:hidden'>
                {data.map((d, index) =>
                    (<BidCard data={d} key={index} />))}
            </div>

            <div className='items-center justify-center hidden w-full bigTablet:flex bigTablet-breakpoint'>
                <div className='w-[95%] mt-2  overflow-y-scroll max-h-[calc(100vh_-_90px)]  bg-white' id='style-1'>
                    <TableComponent columns={columns} data={data} isForViewAction onRowClick={() => setIsBidDetailsOpen(true)} />
                </div>
                {isBidDetailsOpen && <BidDetails title='View Bid Details' setClose={setIsBidDetailsOpen} />}
            </div>

        </div>


    )
}

