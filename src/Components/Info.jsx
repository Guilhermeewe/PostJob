import React from 'react'
import Cards from './Cards'
import { GoFile } from 'react-icons/go'
import { MdOutlineMail, MdWindow } from 'react-icons/md'
import { FiGitPullRequest } from 'react-icons/fi'
import { SiMinutemailer } from 'react-icons/si'
import { LiaCubesSolid } from 'react-icons/lia'

const Info = () => {
    return (
        <div className='container-full'>
            <div className='container-auto flex flex-col flex-wrap'>
                <div className='flex flex-col justify-center items-center text-5xl md:text-7xl text-white gap-2 font-bold'>
                    <span>Spend less time</span>
                    <span>looking for work</span>
                </div>
                <div className='my-4 text-center gray-text text-lg'>
                    <p>We'll help you through the hardest part of</p>
                    <p>your job search</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-4 px-8 border-2 w-60 rounded-2xl border-[#6DE754] text-white font-bold' type='submit'>Create an Account</button>
                </div>

                <div className='flex flex-wrap justify-center items-center gap-8 mt-15'>
                    <Cards icon={<GoFile size={30} color='#6DE754' />} tittle='Cover Letter' text='A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.' />
                    <Cards icon={<MdOutlineMail size={30} color='#6DE754' />} tittle='Resignation Letters' text='A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.' />
                    <Cards icon={<FiGitPullRequest size={30} color='#6DE754' />} tittle='Connection Request' text='A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.' />
                    <Cards icon={<SiMinutemailer size={30} color='#6DE754' />} tittle='Outreach Emails' text='Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.' />
                    <Cards icon={<MdWindow size={30} color='#6DE754' />} tittle='Resume Optimization' text='Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.' />
                    <Cards icon={<LiaCubesSolid size={30} color='#6DE754' />} tittle='Resume Design' text='A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.' />
                </div>

            </div>
        </div>
    )
}

export default Info