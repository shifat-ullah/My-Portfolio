import skillsData from '../../public/Data/skills.json'
const Skills = () => {
    return (
        <div className="lg:w-[900px]  mt-20 w-[400px] mx-auto ex" id="experience">
            <h1 className=' text-3xl font-bold mb-10'>Skills</h1>


            <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5'>
                {
                    skillsData.map((skill, i) => <div key={i}>

                        <div className=' bg-black border-yellow-300 p-4 border-2 w-[300px] text-center mx-auto'>
                            <h1 className='text-2xl font-bold mb-3'>{skill.title}</h1>
                            <img className=' w-[100px] mx-auto' src={skill.imageSrc} alt="" />
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;