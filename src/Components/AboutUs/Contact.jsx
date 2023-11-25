import { FaComments, FaHeadset, FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div className="lg:flex justify-evenly my-5 space-y-2">

                <div className="card lg:w-80 md:w-96 md:mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <FaLocationArrow className="text-4xl text-sky-400"></FaLocationArrow>
                        <h1 className="text-2xl font-bold my-3">Address</h1>
                        <p className="text-gray-500 cursor-pointer hover:text-blue-500">Ulipur,Munshipara,Kurigram</p>
                        <p className="text-gray-500 cursor-pointer hover:text-blue-500">Road : Thanamore, 01</p>
                        <p className="text-gray-500 cursor-pointer hover:text-blue-500">Building : # 1228</p>
                    </div>
                </div>
                <div className="card lg:w-80 md:w-96 md:mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <FaPhone className="text-4xl text-sky-400"></FaPhone>
                        <h1 className="text-2xl font-bold my-3">Phone</h1>
                        <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaComments className="mr-2"></FaComments >phn: 01737-223990</p>
                        <p className="text-gray-500 flex items-center my-2 hover:text-blue-500 cursor-pointer"><FaPhone className="mr-2"></FaPhone>phn: 01853-196899</p>
                        <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaHeadset className="mr-2"></FaHeadset >tel: +0089-86234</p>
                    </div>
                </div>
                <div className="card lg:w-80 md:w-96 md:mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <MdEmail className="text-4xl text-sky-400"></MdEmail>
                        <h1 className="text-2xl font-bold my-3">Email</h1>
                        <p className="text-gray-500 cursor-pointer underline hover:text-blue-500"> ishtiak.sparrow98@gmail.com</p>
                        <p className="text-gray-500 cursor-pointer underline hover:text-blue-500"> ishtiakahmed01999@gmail.com</p>
                        <p className="text-gray-500 cursor-pointer underline hover:text-blue-500">ishtiakahmed.web007@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;