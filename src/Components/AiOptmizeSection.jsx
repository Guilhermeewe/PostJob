import Ilustration1 from '../assets/Illustration1.svg'
import Ilustration2 from '../assets/Illustration2.svg'

const AiOptmizeSection = () => {
    return (
        <div className='container-full overflow-clip bg-[#6DE754] mt-35 py-10 flex flex-col'>
            <div className='container-auto flex flex-row max-md:flex-wrap '>
                <div className='flex flex-col justify-center max-md:items-center max-md:text-center gap-10 max-w-[660px]'>
                    <span className='max-md:text-4xl max-md:px-8 text-6xl text-wrap font-bold max-md:text-center'>Free AI cover letter generator powered by GPT</span>
                    <span className='text-lg md:pr-32 max-md:px-4'>A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters.</span>
                    <button type='submit' className='py-2 px-8 font-bold w-[200px] rounded-2xl border-2 '> Try For Free Now</button>
                </div>
                <div className='max-md:hidden '>
                    <img src={Ilustration1} alt="" />
                </div>
            </div>
            <div className='container-auto gap-10 flex flex-row max-md:flex-wrap'>
                <div className='max-md:mt-15'>
                    <img src={Ilustration2} alt="" />
                </div>
                <div className='flex flex-col md:pl-10 max-md:text-center justify-center gap-10 max-w-[660px] max-md:items-center'>
                    <span className='md:text-6xl text-4xl max-md:px-2 text-wrap font-bold '>Optimize the keywords in your resume</span>
                    <span className='md:pr-32'>By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.</span>
                    <button type='submit' className='py-2 px-2 w-[200px] font-bold rounded-2xl border-2 '>Optimize Your Resumes</button>
                </div>
            </div>
        </div>
    )
}

export default AiOptmizeSection