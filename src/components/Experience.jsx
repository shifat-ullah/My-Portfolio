import experience from '../../public/Data/experience.json'
import './experience.css'

const Experience = () => {
  return (
    <>
      <div className="lg:w-[900px]  mt-20 w-[400px] mx-auto ex" id="experience">
        <h1 className=' text-3xl font-bold mb-10'>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="flex gap-12 mb-20 bg-color  justify-center border-yellow-400 p-5 text-xl mx-auto text-center my-5"
                style={{boxShadow:'0px 0px 10px 10px rgba(78,175,10,0.5)'}}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img className='w-[100px]' src={data.imageSrc} alt="" />
                </div>
                <div className="right">
                  <h2 className='text-xl font-bold'>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;