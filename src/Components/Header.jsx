import Logo from './Logo'
import { FcMenu } from "react-icons/fc";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';


const Header = () => {
    const container = useRef()
    const navBarRef = useRef()
    const buttonsRef = useRef()
    const logoRef = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const navItems = ['AI Cover Letter Generator', 'Resume Template', 'Pricing'];

    const toogleMenuHeader = (e) => {
        setIsOpen(!isOpen)
    }

    useGSAP(() => {
        const t1 = gsap.timeline()

        t1.from(container.current, {
            opacity: 0,
            y: -150,
            duration: 1,
            ease: "power4.inOut"

        })


    }, { scope: container })

    return (
        <div className='container-full' ref={container}>
            <div className="container-auto flex relative items-center gap-10 md:pt-16 ">
                <div className='flex max-md:grow' ref={logoRef}>
                    <Logo />
                </div>
                <div className='md:hidden pr-4 flex flex-col justify-center items-center gap-10'>
                    <FcMenu size={35} onClick={toogleMenuHeader} />
                </div>
                <div className='flex grow max-md:hidden' >
                    <ul className='flex text-center flex-row gap-6 text-[16px] gray-text font-bold max-md:hidden' ref={navBarRef}>
                        {navItems.map((e) => (
                            <li
                                key={e}
                                className='group'
                            >
                                {e}
                                <span className="block h-[1px] bg-green-300 scale-x-0 group-hover:scale-x-100 transition-transform " />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-4 font-semibold max-md:hidden pr-2' ref={buttonsRef}>
                    <button type='text' className='hover:scale-x-105 duration-300 border-2 py-2 px-8 rounded-xl text-white border-green-500 '>
                        Sign In
                    </button>
                    <button type='text' className='hover:scale-x-105 duration-300 bg-green-500 py-2 px-8 rounded-xl'>
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