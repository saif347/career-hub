import { useEffect, useState } from "react";
import JobFeatured from "../JobFeatured/JobFeatured";


const FeaturedJob = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="text-center">
            <h3 className="text-5xl font-extrabold mb-4">Featured Jobs</h3>
            <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 my-10">
                {
                    jobs.map(job => <JobFeatured key={job.id} job={job}></JobFeatured> )
                }
            </div>


        </div>
    );
};
export default FeaturedJob;