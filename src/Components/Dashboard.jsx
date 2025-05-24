import { useGSAP } from '@gsap/react'
import Dashboardimage from '../assets/Dashboardimage.svg'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Dashboard = () => {
    const container = useRef()
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: '-150px center',
                end: '1000px top',
                toggleActions: 'play pause'
            }
        })

        tl.from(text1.current, {
            opacity: 0,
            duration: 0.25,
            fontSize: 0,
            y: 150,
            scaleY: 1,
            ease: "power4.out"
        }).from(text2.current, {
            opacity: 0,
            duration: 0.25,
            fontSize: 0,
            y: 150,
            scaleY: 1,
            ease: "power4.out"
        }).from(text3.current, {
            opacity: 0,
            duration: 0.25,
            ease: "sine.out"
        })
    })
    return (
        <div ref={container} id='container' className='container-full my-35 flex justify-center items-center '>
            <div className='container-auto bg-[#6DE754] rounded-4xl pt-10'>
                <div className='flex flex-col justify-center items-center '>
                    <div ref={text1} className='text-5xl font-bold flex-col flex text-center max-md:text-3xl gap-2'>
                        <span>Submit Better job </span>
                        <span>applications</span>
                    </div>
                    <span ref={text2} className='text-[152px] font-bold max-md:text-7xl'>10x faster</span>
                    <div ref={text3} className='flex flex-col text-center text-xl my-4 max-md:text-sm'>
                        <span>AI cover letter generator, resume keyword checker, outreach </span>
                        <span>message writer, and more. Powered by GPT</span>
                    </div>
                </div>
                <div className='flex justify-center items-center  '>
                    <img src={Dashboardimage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard