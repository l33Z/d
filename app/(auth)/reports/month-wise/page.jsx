"use client"

import TableComponent from '@/components/common/table-component'
import RedirectNavbar from '@/components/navbars/redirect-navbar'


export default function MonthWiseReports() {

    const data = {
        scrap: "345",
        core: "50",
        year: "2000",
        make: "Food Tourus",
        model: "Thunder",
        trim: "SHO",
        tvalue: "$350"

    }


    const columns = [
        { name: 'Scrap', accessor: 'scrap' },
        { name: 'Core', accessor: 'core' },
        { name: 'Year', accessor: 'year' },
        { name: 'Make', accessor: 'make' },
        { name: 'Model', accessor: 'model' },
        { name: 'Trim', accessor: 'trim' },
        { name: 'Total Value', accessor: 'tvalue' },

    ]

    const TableData = [...Array(20)].map(() => data)

    return (
        <div className='flex flex-col justify-center w-full min-h-screen  bg-[#e5e5e5] bigTablet:bg-white'>

            <RedirectNavbar titleName="Reports List" revertPath="/reports" />

            <div className='min-h-[calc(100vh_-_64px)] flex flex-col items-center bigTablet-breakpoint'>
                <div className='w-full px-3 py-4 font-bold bg-white bigTablet:w-[95%] bigTablet:px-0'>
                    <h2 >Bids Report : <span className='font-normal'>Jan, 2023</span> </h2>
                </div>

                <div className='w-full text-xs font-semibold bigTablet:hidden '>

                    {[...Array(16)].map((a, i) => {
                        return (
                            <div className='flex flex-col w-full px-3 py-4 mt-2 bg-white' key={i}>
                                <div className='flex justify-between w-full'>
                                    <div className='flex items-center'>
                                        <p>Scrap : <span className='mr-1.5 font-normal text-[#5e5e5e] ' >{data.scrap}</span> </p>
                                        <p>Core : <span className='mr-1.5 font-normal text-[#5e5e5e]' >{data.core}</span> </p>
                                        <p>Year : <span className='font-normal text-[#5e5e5e]'> {data.year}</span> </p>
                                    </div>
                                    <div>
                                        <p className='text-sm'>Total Value : <span className='font-normal text-[#5e5e5e]'> $350</span></p>
                                    </div>

                                </div>
                                <div className='flex w-full mt-2'>
                                    <div className='flex'>
                                        <p>Make : <span className='mr-1.5 font-normal text-[#5e5e5e]' >{data.make}</span> </p>
                                        <p>Model : <span className='mr-1.5  font-normal text-[#5e5e5e]' >{data.model}</span> </p>
                                        <p>Trim : <span className='font-normal text-[#5e5e5e]'> {data.trim}</span> </p>
                                    </div>
                                </div>
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

