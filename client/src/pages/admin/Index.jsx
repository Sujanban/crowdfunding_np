import React from 'react'
import { Link } from 'react-router-dom'
import { LuChevronRight, LuHome } from "react-icons/lu";

const Index = () => {
    return (
        <div className='p-4'>
            <nav className="w-full px-2 py-8 max-w-7xl mx-auto flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link
                            to={"/mycampaigns"}
                            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                        >
                            <LuHome className="mr-4 h-4 w-4" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <LuChevronRight className="h-4 w-4" />
                            <Link to={'/managecampaign/'} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                Index
                            </Link>
                        </div>
                    </li>
                    {/* <li aria-current="page">
                        <div className="flex items-center">
                            <LuChevronRight className="h-4 w-4" />
                            <Link to={'/editcampaign/'} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                Edit Campaign
                            </Link>
                        </div>
                    </li> */}
                </ol>
            </nav>
            <div className='p-6 bg-gray-50'>
                    Hello admin
            </div>
        </div>
    )
}

export default Index