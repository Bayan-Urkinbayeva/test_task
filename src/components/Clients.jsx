import Microsoft from "../img/Microsoft.svg"
const Clients = () => {
    return (
        <div className="w-full h-auto md:h-52 flex items-center justify-center ">
            <div className='w-3/4 h-auto md:h-36 flex items-center justify-center flex-col md:flex-row md:space-x-10 '>
                <img src={Microsoft} className="w-40 2xl:w-56"/>
                <img src={Microsoft} className="w-40 2xl:w-56"/>
                <img src={Microsoft} className="w-40 2xl:w-56"/>
                <img src={Microsoft} className="w-40 2xl:w-56"/>
            </div>
        </div>
    )
}
export default Clients