const Resume = ({handleResumeView}) => {
    return (
        <div style={{backgroundColor: "#B8E8FC", borderColor: "#B8E8FC"}} className="font-serif">
            <div className="w-3/4 mx-auto tracking-wide">
            <p className="text-right py-5"><span onClick={()=>{handleResumeView()}} className="cursor-pointer">Back to Home</span></p>
                <div className="text-left py-8">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl">Summary</h1>
                    <p className="text-md md:text-xl lg:text-xl mt-3 mb-7">I am a Software Engineer with 1.5 years of experience collaborating with cross-functional teams.Highly skilled Data Extraction Engineer with expertise in developing efficient and scalable data extraction solutions. Adept at leveraging advanced technologies and tools to retrieve, transform, and analyze complex data sets. Demonstrated success in designing and implementing automated data extraction processes to improve accuracy and efficiency. </p>
                </div>
                <div className="text-left py-8">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl">Skills</h1>
                    <div className="flex justify-center flex-wrap">
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-python' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> Python</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-django' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> Django</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-react' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> React</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-git' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> Git</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-html5' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> HTML</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxl-css3' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> CSS</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bxs-data' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> SQL</span>
                        </div>
                        <div className="mx-5 text-center">
                            <span className="text-3xl md:text-7xl lg:text-7xl"> <i class='bx bx-images' ></i></span><br />
                            <span className="text-md md:text-xl lg:text-xl"> Data Visualization</span>
                        </div>
                    </div>
                </div>
                <div className="text-left py-8">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl">Work Experience</h1>
                    <p className="text-md md:text-xl lg:text-xl mt-3 mb-7">
                        <b>Software Engineer – TJ Green Energy R&D Pvt. Ltd. – Coimbatore, TN</b><br />
                        <span>Mar 2022 - Present</span>
                        <ul className="list-disc">
                            <li>Generated  Weekly reports dashboard for continuous accounts of Events/Abstracts Processed using MS Excel.</li>
                            <li>Implemented Charts to visualize collected abstracts in our product dashboard using data from Elastic Search. </li>
                            <li>Developed Internal Safety Tool (Web App) to allocate abstracts to Bio Medical team to QC which helps to reduced processing time by 30%  -  Tech Stack used: Node JS, React JS, PostgreSQL.</li>
                            <li>Developed Event Allocation Tool (Web App) to allocate tasks to Developers, QC, QA  which helps to reduced processing time by 70%  -  Tech Stack used: Python, Django, Node JS, React JS, PostgreSQL.</li>
                        </ul>
                    </p>
                    <p className="text-md md:text-xl lg:text-xl mt-3 mb-7">
                        <b>Junior Data Extraction Engineer – TJ Green Energy R&D Pvt. Ltd. –  Coimbatore, TN </b><br />
                        <span>Dec 2021 - Feb 2022</span>
                        <ul className="list-disc">
                            <li>Scraped More than 500 Events  (Meeting Abstracts) Data using Python, Requests, BeautifulSoup, Selenium.</li>
                            <li>Implemented Scheduled Automated Script for collecting Journals Data.</li>
                            <li>Converted scraped CSV data to XML File using Python, Pandas, Element Tree Library.</li>
                        </ul>
                    </p>
                </div>
                <div className="text-left py-8">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl">Education</h1>
                    <p className="text-md md:text-xl lg:text-xl mt-3 mb-7">
                        <b>Master of Science in Software Engineering – Annamalai University – Chidambaram, TN </b><br />
                        <span>July 2015 - May 2020</span><br />
                        <span>GPA: 7.2</span>
                    </p>                
                </div>
            </div>
        </div>
    )
}

export default Resume;