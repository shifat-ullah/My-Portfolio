import pdf from '../pdf/1.pdf'
import image from '../assets/shifat_ullah.jpg'
import  './ResumeDownlode.css'

const ResumeDownload = () => {
    return (
        <>
            <div className="flex lg:w-[1300px] lg:mt-16 gap-12 align-middle mx-auto flex-col-reverse lg:flex-row lg:p-12 p-3 justify-between items-center lg:items-start">
                <div className="mt-5  border-[1px]  border-yellow-500 p-4 mx-auto lg:mt-20 w-full text-center" style={{boxShadow:'0px 0px 10px 10px rgba(101,175,10,0.5)'}}>
                    <h1 className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sapiente, nostrum atque repellat nemo dolores enim, accusamus rem voluptas non tenetur. Aliquid quidem doloremque quam laudantium eius, hic sapiente fugit?</h1>
                    <a href={pdf} download='1.pdf' className="btn  btn-outline outline-amber-600 text-orange-500 mt-5 lg:mt-0">Download Resume</a>
                </div>
                <div className="lg:mt-0 flex justify-center w-full">
                    <img className="rounded-full mt-5 animation  lg:h-[300px]  h-[400px] w-[400px] sm:w-[250px] md:w-[300px] lg:w-[300px] " src={image} alt="Profile" />
                </div>
            </div>
        </>
    );
};

export default ResumeDownload;
