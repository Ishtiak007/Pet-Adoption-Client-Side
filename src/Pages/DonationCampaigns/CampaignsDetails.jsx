import { FaDog } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const CampaignsDetails = () => {
    const campaignsDetails = useLoaderData();
    const { image, petName, maximumDonation, highestTotal, lastDate, longDescription } = campaignsDetails;
    return (
        <div>
            <div style={{ '--image-url': `url(${image})` }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-2xl uppercase font-bold text-white">Name : {petName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex my-7 gap-4">
                <div className="flex-1">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Pet Name : {petName}</h2>
                            <p className="font-bold">Maximum Donation: {maximumDonation}</p>
                            <p className="font-bold">Highest Donation: {highestTotal}</p>
                            <p className="font-bold">Last Date: {lastDate}</p>
                            <p className="text-gray-500">{longDescription}</p>
                            <div className="card-actions justify-start my-4">
                                <Link><button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-green-500 px-5 py-3 rounded-3xl text-white font-bold flex gap-3 items-center">Donate Now <FaDog></FaDog></button></Link>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center">Donate Your Amount</h3>
                                        <div className="modal-action">
                                            <form method="dialog" className="card-body">
                                                {/* <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-semibold">Your Donation</span>
                                                    </label>
                                                    <input type="text" name="yourDonation" placeholder="Your Donation" className="input input-bordered" required />
                                                </div> */}
                                                <div className="form-control mt-3">
                                                    {

                                                        maximumDonation.length ? <Link to='/dashboard/payment'>
                                                            <button className="px-4 py-2 bg-blue-800 w-full rounded-2xl btn-outline text-white font-bold">Donate</button>
                                                        </Link>
                                                            :

                                                            <button disabled className="px-4 py-2 bg-blue-800 w-full rounded-2xl btn-outline text-white font-bold">Donate</button>

                                                    }
                                                    <p className="text-center my-1">Press ESC key to exit</p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={image} className="w-full rounded-md border-8 border-sky-200" alt="" />
                </div>
            </div>

        </div>
    );
};

export default CampaignsDetails;