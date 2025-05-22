import React from 'react'
import Logo from './Logo'
import { FcMenu } from "react-icons/fc";
import { useState } from 'react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleMenuHeader = (e) => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='container-full'>
            <div className="container-auto flex relative items-center gap-10 pt-16 ">
                <div className='flex max-md:grow '>
                    <Logo />
                </div>
                <div className='md:hidden pr-4 flex flex-col justify-center items-center gap-10'>
                    <FcMenu size={35} onClick={toogleMenuHeader} />
                </div>
                <div className='flex grow max-md:hidden'>
                    <ul className='flex text-center flex-row gap-6 text-[16px] gray-text font-bold max-md:hidden'>
                        <li>AI Cover Letter Generator</li>
                        <li>Resume Template</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='flex gap-4 font-semibold max-md:hidden pr-2'>
                    <button type='text' className='border-2 py-2 px-8 rounded-xl text-white border-green-500 '>
                        Sign In
                    </button>
                    <button type='text' className='bg-green-500 py-2 px-8 rounded-xl'>
                        Get Started
                    </button>
                </div>
            </div>
            {/* mobile ToogleMenuHeader action */}
            {isOpen && (
                <div className='flex flex-col justify-center'>
                    <ul className='flex flex-col items-center gap-6 my-10 text-[16px] gray-text font-bold '>
                        <li>AI Cover Letter Generator</li>
                        <li>Resume Template</li>
                        <li>Pricing</li>
                    </ul>
                    <div className='my-2 shadow-2xl pb-4 flex justify-center items-center gap-2'>
                        <button type='text' className='border-2 py-2 px-8 rounded-xl text-white border-green-500 '>
                            Sign In
                        </button>
                        <button type='text' className='bg-green-500 py-2.5 px-8 rounded-xl'>
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header