
const Cards = ({ icon, tittle, text, }) => {
    return (
        <div className='card card-hero max-md:w-[300px] max-md:items-center max-md:text-center '>
            <span className=''>{icon}</span>
            <span className='text-white font-medium text-[16px]'>{tittle}</span>
            <span className='gray-text text-[16px]'>{text}</span>
        </div>
    )
}

export default Cards