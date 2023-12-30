// import banner from '../../assets/imgs/images/bg1.png'
import banner_png from '../../assets/imgs/images/user.png'
import './banner.css'
const Banner = () => {
    return (
        <header className='banner'>
            <div className='flex gap-20 justify-between  items-center max-w-7xl mx-auto pt-5'>
                <div className='w-[570px]'>
                    <h2 className="text-6xl leading-normal font-extrabold">One Step <br />
                        Closer To Your <span className="text-[#7e90fe]">Dream Job</span></h2>
                    <p className='text-xl text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage  all your job application from start to finish.</p>
                    <button className="btn mt-4 bg-gradient-to-tr from-[#7e90fe] to-[#9873ff] text-xl text-white">Get Started</button>
                </div>
                <div>
                    <img className='h-full' src={banner_png} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Banner;