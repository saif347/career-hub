import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-10 text-center space-y-8">
            <h1 className="text-4xl text-center my-8 font-bold">Oops!! page not found</h1>
            <Link to="/"><button className="btn btn-outline">Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;