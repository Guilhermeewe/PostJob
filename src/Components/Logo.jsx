import React from 'react'
import LogoIcon from '../assets/Logo.svg'

const Logo = () => {
    return (
        <div className='flex flex-row p-4 items-center gap-2'>
            <img src={LogoIcon} alt="LogoIcon" className='w-10 h-10' />
            <span className='text-xl font-bold text-white'>PostJob</span>
        </div>
    )
}

export default Logo