"use client"

import TableComponent from '@/components/common/table-component'
import RedirectNavbar from '@/components/navbars/redirect-navbar'


export default function DayWiseReports() {

    const data = {
        date: "Jan 1, 2023",
        bids: "34",
        spend: "$15,740 ($463)",
    }

    const columns = [
        {
            name: 'Date', accessor: 'date', render: (d, index) => {
                return (<p>
                    {`Jan ${1 + index}, 2023`}
                </p>)
            }
        },
        { name: 'Bids', accessor: 'bids' },
        { name: 'Spend(Avg)', accessor: 'spend' },

    ]

    const TableData = [...Array(31)].map(() => data)

    return (
        <div className='flex flex-col justify-center w-full min-h-screen bg-[#e5e5e5]  bigTablet:bg-white'>

            <RedirectNavbar titleName="Reports" revertPath="/reports" />

            <div className='min-h-[calc(100vh_-_64px)] flex flex-col items-center bigTablet-breakpoint '>

                <div className='w-full p-4 font-bold bg-white bigTablet:w-[95%] bigTablet:px-0'>
                    <h2 >Bids Report : <span className='font-normal'>Jan 1, 2023 to Jan 31, 2023</span> </h2>
                </div>

                <div className='w-full text-xs font-semibold bigTablet:hidden'>

                    {[...Array(16)].map((a, i) => {
                        return (
                            <div className='flex flex-col w-full p-4 mt-2 bg-white' key={i}>
                                <div className='flex justify-between w-full'>
                                    <p className='text-sm'>Jan {1 + i}, 2023</p>
                                    <p className='text-sm'>Spend(Avg) : <span className='font-normal text-[#5e5e5e]'> $15,740 ($463)</span></p>
                                </div>
                                <p className='mt-1.5'>Bids : <span className='font-normal text-[#5e5e5e]' >34</span> </p>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='overflow-y-scroll max-h-[calc(100vh_-_140px)] hidden w-[95%] bigTablet:block' id='style-1'>
                    <TableComponent columns={columns} data={TableData} />
                </div>

            </div>
        </div>


    )
}

