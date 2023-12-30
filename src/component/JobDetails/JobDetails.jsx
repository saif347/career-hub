import { useLoaderData, useParams } from "react-router-dom";
import bg from '../../assets/imgs/images/bg1.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLc } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(job)
    const {job_description, job_responsibility, educational_requirements, experiences, job_title, salary, location}= job

    const handleJobApply = ()=>{
        saveToLc(idInt)
        toast('you have applied successfully')
    }


    return (
        <div className="">
          <div className="pt-16 banner"> 
             <h2 className="text-5xl text-center font-extrabold">Job details</h2>
             <img src={bg} alt="" />

          </div>
           <section className="max-w-7xl mx-auto">
            <div className=" grid grid-cols-4 gap-6 my-28">
                <div className=" col-span-3 space-y-4">
                    <p><span className="text-xl font-extrabold ">Job Description :</span>
                    <span className="text-[#757575]">
                        {job_description}
                    </span></p>
                    <p><span className="text-xl font-extrabold ">Job Responsibility:</span>
                    <span className="text-[#757575]">
                        {job_responsibility}
                    </span></p>
                    <h5 className="text-xl font-extrabold">Educational Requirements:</h5>
                    <p className="text-[#757575]">{educational_requirements}</p>

                    <h5 className="text-xl font-extrabold">Experiences:</h5>
                    <p className="text-[#757575]">{experiences}</p>

                </div>
                <div className=" border border-[#7E90FE] rounded col-span-1 p-5 bg-gradient-to-b from-[#7E90FE1A] to-[#9873FF1A]">
                    <h3 className="text-xl font-extrabold pb-2 border-b">Job Details</h3>

                    <div className="my-4 space-y-3">
                        <p className=""> <span className="font-bold">Salary :</span><span className=" text-[#757575]">{salary}</span>(per month)</p>
                        <p className=""> <span className="font-bold">Job Title</span><span className=" text-[#757575]">{job_title}</span></p>
                    </div>
                    <div className="mt-4 space-y-4">
                        <h4 className="text-xl pb-3 font-bold">Contact information</h4>
                        <hr />
                        <p className=""><span className="font-bold">Phone: </span><span className=" text-[#757575]"> 01750-00 00 00</span></p>
                        <p className=""><span className="font-bold">Email:</span><span className=" text-[#757575]"> info@gmail.com</span></p>
                        <p className=""><span className="font-bold">Address: </span><span className=" text-[#757575]">{location}</span></p>
                        
                    </div>
                    <div>
                        <button onClick={handleJobApply} className='btn w-full mt-3 bg-gradient-to-tr from-[#7e90fe] to-[#9873ff] text-white'>Apply now</button>
                        <ToastContainer />
                    </div>
                </div>


            </div>
           </section>
        </div>
    );
};

export default JobDetails;