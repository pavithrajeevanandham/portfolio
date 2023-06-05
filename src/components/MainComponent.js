import React, { useState } from "react";
import projects from "../Data/Projects.json"
import ProjectCard from "./ProjectCard";
import ProjectDetailView from "./ProjectDetailView";

const MainComponent = () => {
    const [isProjectListView, setProjectListView] = useState(true);
    const [projectId, setProjectId] = useState(0)
    let handleViewProjectClick = (project_id) => {
        setProjectListView(!isProjectListView)
        setProjectId(project_id);
    }
    return(
        <div>
            <div>
                {isProjectListView && projects["project_list"].map(project => <div>
                    <ProjectCard data={project} handleViewProjectClick={(project_id)=>{handleViewProjectClick(project_id)}} />
                    <div style={{backgroundColor: project["bg-color"]}} className="flex flex-wrap justify-center pb-5">
                        {
                            project["keywords"] && project["keywords"].map(keyword => 
                            <span className="py-1 px-3 border-solid border-2 rounded-full mx-2 my-3 md:my-0 lg:my-0 bg-white text-black font-bold">{keyword}</span>
                            )
                        }
                    </div>
                </div>
                )}
                {!isProjectListView && <ProjectDetailView data={projects["project_list"][projectId]} handleViewProjectClick={handleViewProjectClick} /> }
            </div>
        </div>
    )
}

export default MainComponent;