import ProjectsData from '../../public/Data/projects.json'
const Projects = () => {
    return (
        <div className="lg:w-[900px]  mt-20 w-[400px] mx-auto ex">
            <h1 className=' text-3xl font-bold mb-10'>My Projects</h1>


            <div>
                {
                    ProjectsData.map((project, i) => 
                        <div key={i}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='border-2 border-yellow-400 p-2' src={project.imageSrc} alt="Shoes" /></figure>
                                <div className=" bg-black card-body">
                                    <h2 className="card-title">
                                        {project.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
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