import Dashboardimage from '../assets/Dashboardimage.svg'
const Dashboard = () => {
    return (
        <div className='container-full my-35 flex justify-center items-center '>
            <div className='container-auto bg-[#6DE754] rounded-4xl pt-10'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='text-5xl font-bold flex-col flex text-center max-md:text-3xl gap-2'>
                        <span>Submit Better job </span>
                        <span>applications</span>
                    </div>
                    <span className='text-[152px] font-bold max-md:text-7xl'>10x faster</span>
                    <div className='flex flex-col text-center text-xl my-4 max-md:text-sm'>
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