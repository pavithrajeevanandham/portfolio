import React from "react";


const Sidebar = ({handleResumeView}) => {
    return(
        <div>
            <div className="border-solid border-2 border-slate-500 text-white bg-slate-500 h-64 flex flex-col justify-center">
                <div>
                    <div>
                        <h1 className="text-2xl md:text-4xl lg:text-4xl">Pavithra Jeevanandham</h1>
                        <h4 className="text-md md:text-lg lg:text-lg tracking-widest">Software Engineer</h4>
                        <p className="my-3 text-lg md:text-xl lg:text-xl">Software Engineer who enjoys building and analyzing things.</p>
                    </div>
                    <div className="flex justify-center">
                        <span className="mx-5 cursor-pointer text-2xl"><a href="https://www.linkedin.com/in/pavithrajeevanadham" target="_blank"><i class='bx bxl-linkedin'></i></a></span>                
                        <span className="mx-5 cursor-pointer text-2xl"><a href="https://github.com/vjthatdevgirl" target="_blank"><i class='bx bxl-github' ></i></a></span>
                        <span className="mx-5 cursor-pointer text-2xl"><a href="mailto:vjpavithra5@gmail.com" target="_blank"><i class='bx bx-envelope' ></i></a></span>
                        <span className="mx-5 cursor-pointer text-2xl" onClick={()=>{handleResumeView()}}><i class='bx bx-file'></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar