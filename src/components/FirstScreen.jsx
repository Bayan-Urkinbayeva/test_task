import frame from '../img/Frame.svg'
const FirstScreen = () => {
    return (
        <div className='bg-[#EEEFF1] w-full'>
            <div className="h-[400px] md:h-[600px] flex items-center justify-center">
                <img src={frame} className="hidden sm:flex w-60 lg:w-72 xl:w-96 h-80 ml-20"/>
                <div className='sm:w-1/2 lg:w-2/5 lg:ml-10 lg:pl-10 space-y-12 flex flex-col items-center'>
                    <h1 className='text-black text-2xl sm:text-3xl lg:text-5xl font-sans font-medium text-center lg:text-left'>Дизайн и верстка</h1>
                    <p className='text-[#727272] text-base font-sans font-normal text-center lg:text-left'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <button className='w-32 h-10 lg:w-56 lg:h-16 bg-[#34547A] text-white text-[14px] sm:text-base'>НАПИСАТЬ МНЕ</button>
                    </div>
            </div>
        </div>
    )
}
export default FirstScreen