import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <header className='overflow-clip container-full relative bg-[#6DE754] flex flex-col'>
            <div className='flex flex-col justify-center items-center gap-y-6 py-10'>
                <span className='text-7xl text-center font-bold'>What’s next?</span>
                <span className='text-lg max-md:px-8 max-md:w-[auto] text-wrap text-center w-[600px]'>
                    Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT
                </span>
                <button type='submit' className='py-2 px-2 w-[200px] border-2 rounded-2xl'>Try For Free</button>
            </div>
            <div className='flex flex-row justify-evenly flex-wrap max-md:grid grid-cols-2 grid-rows-2 gap-x-15 px-10 py-10'>
                <ul className='flex flex-col gap-2'>
                    <span className='mb-5 font-bold max-md:text-lg text-4xl'>Platform</span>
                    <li>Plans and Prices</li>
                    <li>AI Create Letters</li>
                    <li>AI Resume Checker</li>
                    <li>Resume Templates</li>
                    <li>Sell Templates</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <span className='font-bold text-4xl max-md:text-lg'>Features</span>
                    <div className='flex flex-col gap-2 mt-5'>
                        <li>AI Cover Letter Creator</li>
                        <li>Resume Keywords Optimizer</li>
                        <li>ATS Resume Checker</li>
                    </div>
                </ul>
                <ul>
                    <span className='font-bold text-4xl max-md:text-lg'>Resources</span>
                    <div className='mt-4 flex flex-col gap-2'>
                        <li>4 AI Tools for Applying a Job</li>
                        <li>How to optimize Resume keywords</li>
                        <li>Why you should use Chat GPT for create Resume</li>
                        <li>What should you include in a Cover Letter</li>
                    </div>
                </ul>
                <ul>
                    <div className='mb-5'>
                        <span className=' max-md:text-lg font-bold text-4xl '>Support</span>
                    </div>
                    <li className='mb-5'>support@gmail.com</li>
                    <div className='flex flex-row gap-x-4'>
                        <li><FaFacebook size={30} /></li>
                        <li><FaInstagram size={30} /></li>
                        <li><FaLinkedin size={30} /></li>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Footer