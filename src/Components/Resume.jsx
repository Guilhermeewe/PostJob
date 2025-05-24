import Illustration3 from '../assets/Illustration3.svg'

const Resume = () => {
    return (
        <div className='container-auto overflow-clip my-15'>
            <div className='flex flex-row max-md:flex-wrap'>
                <div className='flex flex-col justify-center max-md:items-center md:px-25 max-md:text-center gap-10 '>
                    <span className='md:text-6xl text-4xl font-bold text-white'>Free resume design templates</span>
                    <span className='gray-text'>By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.</span>
                    <button className='py-4 px-8 border-2 w-60 rounded-2xl border-[#6DE754] text-white font-bold' type='submit'>Create an Account</button>
                </div>
                <div className='max-md:mt-15'>
                    <img src={Illustration3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Resume