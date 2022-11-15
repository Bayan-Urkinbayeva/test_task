const Form = () => {
    return (
    <div className="w-full h-auto mt-10 sm:mt-0 sm:h-[700px] bg-[#EEEFF1] flex items-center justify-center">
        <div className="w-3/4 flex justify-between items-center flex-col space-y-10">
            <div className="w-full lg:w-1/2 h-52 sm:h-36">
                <h2 className="text-2xl sm:text-[32px] text-black font-sans font-medium text-center">Хотите веб-сайт?</h2>
                <p className="text-[#727272] mt-7 text-base font-sans font-normal text-center">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                <div className="flex space-y-5 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
                    <input type="text" placeholder="Ваше имя" className="outline-0 w-full lg:w-1/2 h-12"/>
                    <input type="email" placeholder="Ваш e-mail" className="outline-0 w-full lg:w-1/2 h-12 "/>
                </div>
                <input type="textarea" placeholder="Сообщение" className="outline-0 h-44"/>
            </div>
            <button className='w-32 h-10 lg:w-56 lg:h-16 bg-[#34547A] text-white text-[14px] sm:text-base'>ОТПРАВИТЬ</button>
        </div>
    </div>
    )
}
export default Form