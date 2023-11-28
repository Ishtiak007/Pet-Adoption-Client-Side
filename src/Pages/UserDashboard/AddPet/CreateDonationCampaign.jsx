import SectionTitleTwo from "../../../Components/SectionTitle/SectionTitleTwo";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCampaign = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)
        if (res.data.success) {
            const donationCampaigns = {
                petName: data.petName,
                image: res.data.data.display_url,
                maximumDonation: data.maximumDonation,
                highestTotal: parseFloat(data.highestTotal),
                lastDate: data.lastDate,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                dateAndTime: new Date
            }
            const donationRes = await axiosSecure.post('/campaigns', donationCampaigns);
            if (donationRes.data.insertedId) {
                // show success popup
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.petName} is added to the donation campaigns route`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }
    return (
        <div>
            <div className=" bg-stone-300 p-3 rounded-md">
                <SectionTitleTwo heading={'Create Donation Campaign'} description={'Create Your Donation Campaign From Here'}></SectionTitleTwo>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">


                        {/* photo input */}
                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Pet Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} name="image" className="file-input w-full" />
                        </div>
                        {/* pet name */}
                        <label className="label">
                            <span className="label-text font-bold">Pet Name</span>
                        </label>
                        <input
                            {...register("petName", { required: true })}
                            name="petName"
                            type="text"
                            placeholder="Pet Name (If the pet is unknown, so please Provide -Unknown)"
                            className="input input-bordered w-full " />
                    </div>




                    {/* maximum and total donation */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Maximum Donation ($)</span>
                            </label>
                            <input
                                {...register("maximumDonation", { required: true })}
                                name="maximumDonation"
                                type="number"
                                placeholder="Maximum Donation"
                                className="input input-bordered w-full " />
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Highest Total Donation ($)</span>
                            </label>
                            <input
                                {...register("highestTotal", { required: true })}
                                name="highestTotal"
                                type="number"
                                placeholder="Highest Total Donation"
                                className="input input-bordered w-full " />
                        </div>
                    </div>



                    {/* location and date */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Last Date Of The Donation</span>
                            </label>
                            <input
                                {...register("lastDate", { required: true })}
                                name="lastDate"
                                type="date"
                                placeholder="Last Date Of The Donation"
                                className="input input-bordered w-full " />
                        </div>
                    </div>




                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <textarea {...register("shortDescription", { required: true })} name="shortDescription" className="textarea textarea-bordered h-24" placeholder="Short Description (20 words recommended)"></textarea>
                    </div>
                    {/* long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Long Description</span>
                        </label>
                        <textarea {...register("longDescription", { required: true })} name="longDescription" className="textarea textarea-bordered h-24" placeholder="Long Description (180 words recommended)"></textarea>
                    </div>



                    <div className="text-center">
                        <button className="px-4 py-2 bg-gray-600 rounded-2xl btn-outline text-white font-bold my-4">Add Your Donation Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDonationCampaign;