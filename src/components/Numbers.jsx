import Number from './Number'
const Numbers = () => {
    return (
        <div className=" w-full h-auto md:h-64 bg-[#34547A] flex items-center justify-center ">
            <div className='mt-10 md:mt-0 w-full lg:w-3/4 md:h-36 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10'>
                <Number/> 
                <Number/>
                <Number/>
                <Number/>
                <Number/>
                <Number/>
            </div>
        </div>
    )
}
export default Numbers