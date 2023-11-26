import { useContext } from "react";
import { FaCat } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PetDetails = () => {
    const petDetails = useLoaderData();
    const { image, petName, petAge, date, location, longDescription, category } = petDetails;
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div style={{ '--image-url': `url(${image})` }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-2xl uppercase font-bold text-white">Details of : {petName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex my-7 gap-4">
                <div className="flex-1">
                    <img src={image} className="w-full rounded-md border-8 border-gray-200" alt="" />
                </div>
                <div className="flex-1">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Pet Name : {petName}</h2>
                            <p className="font-bold">Pet Age: {petAge}</p>
                            <p className="font-bold">Category: {category}</p>
                            <p className="font-bold">Location: {location}</p>
                            <p className="font-bold">Date: {date}</p>
                            <p className="text-gray-500">{longDescription}</p>
                            <div className="card-actions justify-start my-4">
                                <Link><button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-orange-500 px-5 py-3 rounded-3xl text-white font-bold flex gap-3 items-center">Adopt Now <FaCat></FaCat></button></Link>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center">Please Full-fill the form</h3>
                                        <div className="modal-action">
                                            <form method="dialog" className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-semibold">Name</span>
                                                    </label>
                                                    <input type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-semibold">Email</span>
                                                    </label>
                                                    <input type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-semibold">Phone Number</span>
                                                    </label>
                                                    <input type="number" placeholder="Your Phone Number" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-semibold">Your Address</span>
                                                    </label>
                                                    <input type="text" placeholder="Your Address" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control mt-3">
                                                    <button className="px-4 py-2 bg-red-800 rounded-2xl btn-outline text-white font-bold">Submit</button>
                                                </div>

                                                <p className="py-2 text-center">Press ESC key to exit</p>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PetDetails;

