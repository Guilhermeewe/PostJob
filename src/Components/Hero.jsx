import Cards from './Cards'
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { GoFile } from "react-icons/go";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';

const Hero = () => {

    const text = useRef()
    const container = useRef()
    const buttonRef = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const inputRef = useRef()
    const cardRef = useRef()
    gsap.registerPlugin(SplitText)



    useGSAP(() => {

        const _split = SplitText.create(text2.current, {
            type: "chars, lines",
        });

        const split = SplitText.create(text.current, {
            type: "chars, lines",
        });

        const t1 = gsap.timeline()

        t1.from(split.chars, {
            delay: 0.5,
            opacity: 0,
            x: 90,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.05,
        }).from(_split.chars, {
            opacity: 0,
            delay: -1,
            x: 90,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.05
        }).from(text3.current, {
            opacity: 0,
            duration: 0.25,
            ease: "sine.out",
        }).from(inputRef.current, {
            delay: 0.35,
            opacity: 0,
            duration: 0.5,
            scaleX: 0.5,
            ease: "back.out",
            width: 0,
        }).from(cardRef.current.children, {
            opacity: 0,
            x: 100,
            delay: -0.5,
            duration: 0.5,
            scaleX: 2,
            ease: "back.out",
            stagger: 0.25,
        });

        return () => {
            split.revert()
            _split.revert()
        }

    },)

    return (
        <div className='container-auto mt-20' ref={container}>
            <div className='text-[88px] hero-text-animation flex flex-col justify-center items-center font-semibold text-center max-md:text-5xl'>
                <span ref={text} className='green-text'>Win your dream job</span>
                <span ref={text2} className='text-white'>with PostJob</span>
            </div>
            <div ref={text3} className='flex flex-col justify-center items-center my-5 gray-text max-md:text-center max-md:text-sm'>
                <span>Submit better job app — 10x faster. AI cover letter</span>
                <span>generator, resume keyword checker, outreach message</span>
                <span>writer, and more. Powered by GPT</span>
            </div>
            <div className='flex container-auto justify-center items-center'>
                <div ref={inputRef} className='flex justify-center items-center relative w-[700px] max-md:w-[300px]'>
                    <input type="text" placeholder='Your Email' className='gray-text font-extrabold border-2 rounded-lg py-5 px-5 w-full outline-none ' />
                    <button type="submit" ref={buttonRef} className='py-2 px-12 max-md:px-4 absolute rounded-xl right-3 text-black background-button'>Start For Free</button>
                </div>
            </div>

            <div ref={cardRef} className='flex flex-wrap flex-row justify-center items-center gap-8 mt-15 '>
                <Cards refe={cardRef} icon={<GoFile size={30} color='#6DE754' />} tittle='AI Cover Letter Generator' text='The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.' />
                <Cards icon={<FaGlassMartiniAlt size={26} color='#6DE754' />} tittle='Smart Personalization' text='Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.' />
                <Cards icon={<MdOutlineDocumentScanner size={32} color='#6DE754' />} tittle='Resume Scanner' text='A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.' />
            </div>

        </div >
    )
}

export default Hero