import { useEffect, useState } from "react";
import JobFeatured from "../JobFeatured/JobFeatured";


const FeaturedJob = () => {
    const [jobs, setJobs]= useState([])
    const [dataLength, setDataLength]= useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const handleShowAll = ()=>{
        setDataLength(jobs.length)
    }
    return (
        <div className="text-center max-w-7xl mx-auto">
            <h3 className="text-5xl font-extrabold mb-4">Featured Jobs</h3>
            <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-8 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <JobFeatured key={job.id} job={job}></JobFeatured> )
                }
                <div className="text-left">
                    <button
                     onClick={handleShowAll} className="btn bg-gradient-to-tr from-[#7e90fe] to-[#9873ff] text-white">
                        {
                            dataLength === jobs.length ? 'Show less' : 'Show all'
                        }</button>
                </div>
            </div>


        </div>
    );
};
export default FeaturedJob;