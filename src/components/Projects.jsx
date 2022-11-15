import project1 from '../img/Project1.svg'
import project2 from '../img/Project2.svg'
import view from '../img/view.svg'
const Projects = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='mt-10 flex space-y-0 flex-col lg:flex-row '>
                <div className='space-y-5 lg:space-y-0 w-3/4 m-auto lg:m-0 lg:w-auto'>
                <img src={project1} className="w-full"/>
                <img src={project2} className="w-full"/>
                </div>
                <div className='hidden lg:flex flex-col'>
                    <div className='w-full'>
                        <div className='w-1/4 h-[53%] bg-[#34547a] flex items-center justify-center bg-opacity-80 absolute'>
                            <img src={view} />
                        </div>
                        <img src={project2} className="w-full"/>
                    </div>
                <img src={project1} className="w-full"/>
                </div>
                <div className='hidden lg:flex flex-col'>
                <img src={project1} className="w-full"/>
                <img src={project2} className="w-full"/>
                </div>
                <div className='hidden lg:flex flex-col'>
                <img src={project2} className="w-full"/>
                <img src={project1} className="w-full"/>
                </div>
            </div>
        </div>
    )
}
export default Projects