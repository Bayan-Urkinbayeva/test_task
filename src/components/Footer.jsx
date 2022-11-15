import vk from '../img/vk.svg'
const Footer = () => {
    return (
        <div className="mt-10 sm:mt-0 w-full h-36 flex items-center justify-center bg-[#34547A]">
            <div className='w-3/4 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 space-x-0 sm:space-x-10'>
                <div>
                    <h3 className='font-sans text-[21px] text-white'>Иванов Иван</h3>
                    <p className='font-sans text-base text-white'>(с) 2018. Все права защищены.</p>
                </div>
                <div className='flex space-x-4'>
                    <img src={vk} />
                    <img src={vk} />
                    <img src={vk} />
                </div>
            </div>
        </div>
    )
}
export default Footer