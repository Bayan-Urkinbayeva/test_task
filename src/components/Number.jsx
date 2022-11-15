import Group from '../img/Group.svg'
const Number = () => {
    return (
        <div className='flex space-x-2'>
            <img src={Group} className="md:w-[40px] lg:w-[60px]"/>
            <div>
                <h3 className='md:text-base lg:text-[21px] font-sans text-white font-medium'>40+</h3>
                <p className='md:text-[12px] lg:text-base font-sans text-white font-normal'>проектов</p>
            </div>
        </div>
    )
}
export default Number