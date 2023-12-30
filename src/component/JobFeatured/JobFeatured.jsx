import PropTypes from 'prop-types'
import location_png from '../../assets/imgs/icons/Location.png'
import salary_png from '../../assets/imgs/icons/money.png'

const JobFeatured = ({job}) => {
    const {logo, job_title, company_name, location, salary, job_type, remote_or_onsite}= job
    console.log(job)
    return (
        <div className='text-left p-5 space-y-3 border rounded-lg'>
                <img className='mb-6' src={logo} alt={company_name} />
                <h3 className='text-2xl font-bold'>{job_title}</h3>
                <p className='text-xl text-[#757575]'>{company_name}</p>
                <div className='flex gap-3'>
                    <button className='px-5 py-2 border border-[#7E90FE] font-extrabold text-[#7E90FE] rounded'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 border border-[#7E90FE] font-extrabold text-[#7E90FE] rounded'>{job_type}</button>
                </div>
                <div className='flex gap-6'>
                    <p className='text-[#757575]'><img className='mr-2 inline-flex items-center' src={location_png} alt="" /> {location}</p>
                    <p className='text-[#757575]'> <img className='inline-flex mr-3 items-center' src={salary_png}alt="" />{salary}</p>
                </div>
                <button className='btn bg-gradient-to-tr from-[#7e90fe] to-[#9873ff] text-white'>View Details</button>
        </div>
    );
};

JobFeatured.propTypes={
    job: PropTypes.object
}

export default JobFeatured;