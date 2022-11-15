import wd from '../img/wd.svg'
const Navbar = () =>{ 
    const navbarMenu = ["ГЛАВНАЯ", "ОБ АВТОРЕ", "РАБОТЫ","ПРОЦЕСС", "КОНТАКТЫ"]
    return (
        <div className='w-full bg-[#EEEFF1]'>
            <div className=' xl:w-3/4 h-20 sm:h-32 flex items-center justify-center md:justify-between m-auto'>
            <img src={wd} className="hidden md:flex w-20 xl:w-28"/>
            <div className='flex items-center'>
                {navbarMenu.map((menu) => 
                <h1 className='font-sans mr-3 sm:mr-14 text-[10px] sm:text-base font-normal text-black hover:text-[#34547A] cursor-default'>{menu}</h1>
                )}
            </div>
            </div>
        </div>
    )
}

export default Navbar