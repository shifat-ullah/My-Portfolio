import { FaGithub, FaLink } from 'react-icons/fa';
import ProjectsData from '../../public/Data/projects.json'
const Projects = () => {
    return (
        <div className="lg:w-[900px]  mt-20 w-[400px] mx-auto ex">
            <h1 className=' text-3xl font-bold '>My Projects</h1>


            <div className=' grid p-12  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
                {
                    ProjectsData.map((project, i) =>
                        <div key={i}>
                            <div className="card mb-20 w-[300px] mx-auto  bg-base-100 shadow-xl">
                                <figure><img className='border-2 border-yellow-400 h-[300px]  ' src={project.imageSrc} alt="Shoes" /></figure>
                                <div className=" bg-black card-body">
                                    <h2 className="card-title">
                                        {project.title}

                                    </h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions w-full justify-between">
                                        
                                            {/* Live Website Button */}
                                            <a
                                                href={project.demo} // Replace with your live website URL
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-2 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                                            >
                                                <FaLink className="mr-2" />
                                                Demo
                                            </a>

                                            {/* GitHub Button */}
                                            <a
                                                href={project.source} // Replace with your GitHub repository URL
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-2 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
                                            >
                                                <FaGithub className="mr-2" />
                                                GitHub Link
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    )
                }
            </div>
        </div>
    );
};

export default Projects;