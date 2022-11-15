import Rectangle from "../img/Rectangle.svg"
const Skills = () => {
    return(
        <div className="w-full h-[600px] flex items-center justify-center">
            <div className="w-3/4 bg-white h-auto md:h-[450px] flex items-center justify-center md:justify-between flex-col-reverse md:flex-row md:space-x-4">
                <div>
                <h2 className="text-2xl sm:text-[32px] text-black font-sans font-medium text-center">Мои навыки</h2>
                <div className="flex flex-col space-y-10">
                <div>
                <p className="text-[#727272] text-base font-sans mt-10">Adobe Photoshop</p>
                <input type="range" value="80"  className="w-56 sm:w-72 lg:w-80"/>
                </div>
                <div>
                <p className="text-[#727272] text-base font-sans">Adobe Photoshop</p>
                <input type="range" value="80"  className="w-56 sm:w-72 lg:w-80"/>
                </div>
                <div>
                <p className="text-[#727272] text-base font-sans">Adobe Photoshop</p>
                <input type="range" value="80"  className="w-56 sm:w-72 lg:w-80"/>
                </div>
                </div>
                </div>
                <img src={Rectangle} className="w-3/5 md:w-1/2" />
            </div>
        </div>
    )
}
export default Skills