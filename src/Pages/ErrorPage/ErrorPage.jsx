
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-7xl font-bold font-sans text-red-300">sorry!!!</h1>
                    <h1 className="text-2xl font-bold font-sans my-4">404 - Page Not Found</h1>
                    <h1 className="text-2xl font-bold font-sans my-4">Please Reloade</h1>
                    <p className="text-gray-500">The page you are looking for might have been removed <br></br> had its name changed or is temporarity unavailable.</p>
                    <Link to='/'><button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 font-semibold my-3 rounded-3xl">Go To Homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;