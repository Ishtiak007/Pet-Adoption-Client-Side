import { Link } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import image from './registerImage.jpg'
import './RegisterLink.css'

const RegisterLink = () => {
    return (
        <div className="linkItemImg bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'If you want to register, click the Register button'}
                heading={'Here The Register Link'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 p-4">
                <div className='flex-1'>
                    <img className='lg:w-4/5 mx-auto rounded-md' src={image} alt="" />
                </div>
                <div className="flex-1">
                    <p className="uppercase text-2xl font-bold">Want to register? </p>
                    <p className='my-3 text-gray-200'>Unlock a world of possibilities! Register now to access exclusive pet profiles, adoption events, and valuable resources. Join our community and start your journey to finding the perfect furry companion today!</p>
                    <Link to='/signUp'><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Register Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterLink;