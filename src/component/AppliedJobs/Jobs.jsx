import { useLoaderData } from 'react-router-dom';
import bg from '../../assets/imgs/images/bg1.png'
import { getJobApplications } from '../../utility/localStorage';
import { useEffect, useState } from 'react';
import location_png from '../../assets/imgs/icons/Location.png'
import salary_png from '../../assets/imgs/icons/money.png'
import { Link } from 'react-router-dom';


const Jobs = () => {
    const jobs = useLoaderData()
    const [jobApplied, setJobApplied] = useState([]);
    const [disPlayData, setDisplayData]= useState([]);
    // console.log(disPlayData)

    const handelJobFilter= filter =>{
        if(filter === 'All'){
            setDisplayData(disPlayData)
            setJobApplied(disPlayData)
        }
        else if(filter === 'Remote'){
            const remoteJobs = jobApplied.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayData(remoteJobs)
            setJobApplied(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onSiteJobs = jobApplied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayData(onSiteJobs)
            setJobApplied(onSiteJobs)
        }
    }


    useEffect(() => {
        const savedJobIds = getJobApplications()
        if (jobs.length > 0) {
            // const appliedJobs = jobs.filter(job => savedJobIds.includes(job.id))
            // console.log(appliedJobs)

            const appliedJob = []
            for (const id of savedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    appliedJob.push(job)
                }
            }
            setJobApplied(appliedJob)
            setDisplayData(appliedJob)
            // console.log(savedJobIds, appliedJob)
        }

    }, [jobs])

    return (
        <section>
            <div className="pt-16 banner">
                <h2 className="text-5xl text-center font-extrabold">Applied jobs</h2>
                <img src={bg} alt="" />
            </div>
            

            <div className='my-20 max-w-7xl mx-auto space-y-5'>
                <div className='text-right'>
                    <details className="dropdown max-w-7xl mx-auto">
                        <summary className="m-1 btn">Filter</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>handelJobFilter('All')}><a>All</a></li>
                            <li onClick={()=> handelJobFilter('Remote')}><a>Remote</a></li>
                            <li onClick={()=> handelJobFilter('onsite')}><a>On site</a></li>
                        </ul>
                    </details>
                </div>
                {
                    jobApplied.map(job => <div key={job.id}
                        className='flex p-6 justify-between items-center text-left  border rounded-lg'>
                        <div className='flex gap-5 items-center'>
                            <div className='p-4 bg-[#F4F4F4] h-[240px] w-[240px] flex items-center justify-center rounded-lg'>
                                <img className='' src={job.logo} alt={job.company_name} />
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-bold'>{job.job_title}</h3>
                                <p className='text-xl text-[#757575]'>{job.company_name}</p>
                                <div className=''>
                                    <button className='px-5 py-2 mr-6 border border-[#7E90FE] font-extrabold text-[#7E90FE] rounded'>{job.remote_or_onsite}</button>
                                    <button className='px-5 py-2 border border-[#7E90FE] font-extrabold text-[#7E90FE] rounded'>{job.job_type}</button>
                                </div>
                                <div className='flex gap-8'>
                                    <p className='text-[#757575]'><img className='mr-2 inline-flex items-center' src={location_png} alt="" /> {job.location}</p>
                                    <p className='text-[#757575]'> <img className='inline-flex mr-3 items-center' src={salary_png} alt="" />{job.salary}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/job/${job.id}`}>
                                <button className='btn mt-3 bg-gradient-to-tr from-[#7e90fe] to-[#9873ff] text-white'>View Details</button>
                            </Link>
                        </div>
                    </div>)
                }

            </div>


        </section>
    );
};

export default Jobs;