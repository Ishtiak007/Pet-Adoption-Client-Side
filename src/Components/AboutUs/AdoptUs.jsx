import { Link } from "react-router-dom";
import img1 from '../AboutUs/img/aboutImg1.png'
import img2 from '../AboutUs/img/aboutImg2.png'

const AdoptUs = () => {
    return (
        <div>
            <div className="hero bg-opacity-40 lg:h-[600px]">
                <div className="lg:flex">
                    <div className="flex-1">
                        <img className="w-2/3 mx-auto" src={img1} alt="" />
                        <img className="w-32 mx-auto" src={img2} alt="" />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <h1 className="text-4xl text-left font-bold">Join our club</h1>
                            <p className="text-gray-700 my-5">Embark on an enriching journey. Join our club, where shared passions flourish, friendships blossom, and a vibrant community awaits. Experience the joy of connection, learning, and growth together with us.</p>
                            <Link><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptUs;