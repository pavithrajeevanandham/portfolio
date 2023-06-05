import React from "react";


const ProjectCard = ({data, handleViewProjectClick}) => {
    
    return(
        <div className="border-solid border-2 h-96 flex flex-col justify-center" style={{backgroundColor: data["bg-color"], borderColor: data["bg-color"]}}>
            <div className="flex flex-col w-4/6 mx-auto md:w-full md:flex-row lg:w-full lg:flex-row">
                <div className="md:w-2/5 lg:w-2/5">
                    <img className="preview-image mx-auto" src={data["image"]} alt="project preview"/>
                </div>
                <div className="md:w-3/5 md:text-left lg:w-3/5 lg:text-left">
                    <h1 className="text-2xl mb-4 md:text-4xl lg:text-4xl">{data["title"]}</h1>
                    <p className="text-normal md:text-xl lg:text-xl mb-7">{data["intro"]}</p>
                    <span onClick={()=>{handleViewProjectClick(data['id'])}} className="border-slate-800 font-semibold border-solid border-2 px-3 py-2 cursor-pointer shadow-md">View Project</span>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard;