import Video from "../img/Video.svg"
const VideoSection = () => {
    return(
        <div className="w-full 2xl:h-[900px] bg-[#EEEFF1] flex items-center justify-center">
            <div className="w-3/4 flex justify-between items-center flex-col">
            <div className=" sm:w-[540px] h-48 sm:h-36">
            <h2 className="text-2xl sm:text-[32px] text-black font-sans font-medium text-center">Как я работаю</h2>
            <p className="text-[#727272] mt-7 text-base font-sans font-normal text-center">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <img src={Video} className="w-full h-[420px] lg:h-[550px] xl:mt-10" />
            </div>
        </div>
    )
}
export default VideoSection