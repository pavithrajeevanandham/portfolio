import React from "react";
import { Interweave } from 'interweave';

const ProjectDetailView = ({data, handleViewProjectClick}) =>{
    return(
        <div style={{backgroundColor: data["bg-color"], borderColor: data["bg-color"]}} >
            <div className="w-4/5 mx-auto">
                <div className="pt-5">
                    <p className="text-right"><span onClick={()=>{handleViewProjectClick(data['id'])}} className="cursor-pointer">Back to Projects</span></p>
                    <div className="h-44 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl">{data["full-title"]}</h1>
                    </div>
                    <div className="my-10 h-3/4 w-3/6 mx-auto mb-10">
                        <img className="h-full w-full" src={data["image"]} alt="project preview"/>
                    </div>
                    <div className="text-left">
                        <h1 className="text-2xl md:text-4xl lg:text-4xl">Skills</h1>
                        <div className="flex mx-auto w-3/5 mb-5">
                            {
                                data["skills"].map(skill => <div className="mx-5 text-center">
                                    <span className="text-3xl md:text-7xl lg:text-7xl"><i className={'bx '+skill["icon"]}></i></span><br />
                                    <span className="text-lg md:text-2xl lg:text-2xl">{skill["name"]}</span>
                                </div>)
                            }
                        </div>
                        {
                            data["details"] && data["details"].map(detail => <>
                                <h1 className="text-2xl md:text-4xl lg:text-4xl"><Interweave content={detail["sub-title"]}/></h1>
                                <p className="text-md md:text-xl lg:text-xl mt-3 mb-7"><Interweave content={detail["description"]}/></p>
                            </>)
                        }
                        {
                            data["showcase-images"] && data["showcase-images"].map(img => <>
                            <img className="h-3/4 w-3/6 mx-auto mt-10" src={img} alt="showcase images"/>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailView;