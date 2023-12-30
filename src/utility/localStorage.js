const getJobApplications = ()=>{
    const storedSavedApplications = localStorage.getItem('job-applications')
    if(storedSavedApplications){
        return JSON.parse(storedSavedApplications)
    }
    return [];
}

const saveToLc = id =>{
    const storedJobApplications = getJobApplications()
    const exist = storedJobApplications.find(jobId => jobId === id)
    if(!exist){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}
export {getJobApplications, saveToLc}