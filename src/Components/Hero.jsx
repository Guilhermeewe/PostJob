import Cards from './Cards'
import { GoFile } from "react-icons/go";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Hero = () => {
    return (
        <div className='container-auto mt-20'>
            <div className='text-[88px] flex flex-col justify-center items-center font-semibold text-center max-md:text-5xl'>
                <span className='green-text'>Win your dream job</span>
                <span className='text-white'>with PostJob</span>
            </div>
            <div className='flex flex-col justify-center items-center my-5 gray-text max-md:text-center max-md:text-sm'>
                <span>Submit better job app — 10x faster. AI cover letter</span>
                <span>generator, resume keyword checker, outreach message</span>
                <span>writer, and more. Powered by GPT</span>
            </div>
            <div className='flex container-auto justify-center items-center'>
                <div className='flex justify-center items-center relative w-[700px] max-md:w-[300px]'>
                    <input type="text" placeholder='Your Email' className='gray-text font-extrabold py-5 px-5 border-2 rounded-2xl w-full outline-none ' />
                    <button type="submit" className='py-2 px-12 max-md:px-4 absolute rounded-xl right-3 text-black font-bold background-button'>Start For Free</button>
                </div>
            </div>

            <div className='flex flex-wrap flex-row justify-center items-center gap-8 mt-15 '>
                <Cards icon={<GoFile size={30} color='#6DE754' />} tittle='AI Cover Letter Generator' text='The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.' />
                <Cards icon={<FaGlassMartiniAlt size={26} color='#6DE754' />} tittle='Smart Personalization' text='Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.' />
                <Cards icon={<MdOutlineDocumentScanner size={32} color='#6DE754' />} tittle='Resume Scanner' text='A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.' />
            </div>

        </div >
    )
}

export default Hero