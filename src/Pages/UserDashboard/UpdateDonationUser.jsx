import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitleTwo from "../../Components/SectionTitle/SectionTitleTwo";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateDonationUser = () => {
    const { longDescription, shortDescription, lastDate, highestTotal, maximumDonation, petName, _id } = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const petLists = {
                image: res.data.data.display_url,
                petName: data.petName,
                maximumDonation: data.maximumDonation,
                highestTotal: data.highestTotal,
                petLocation: data.petLocation,
                lastDate: data.lastDate,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
            }
            const petResult = await axiosSecure.patch(`/campaigns/${_id}`, petLists);
            if (petResult.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.petName} is Updated to the pet listing route`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }
    return (
        <div>
            <div className=" bg-stone-300 p-3 rounded-md">
                <SectionTitleTwo heading={'Update your Create Donation Campaign'} description={'Update Create Your Donation Campaign From Here'}></SectionTitleTwo>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">


                        {/* photo input */}
                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Pet Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} name="image" className="file-input w-full" />
                            {errors.image && <span className='text-red-500'>This Image field is required</span>}
                        </div>
                        {/* pet name */}
                        <label className="label">
                            <span className="label-text font-bold">Pet Name</span>
                        </label>
                        <input
                            defaultValue={petName}
                            {...register("petName", { required: true })}
                            name="petName"
                            type="text"
                            placeholder="Pet Name (If the pet is unknown, so please Provide -Unknown)"
                            className="input input-bordered w-full " />
                        {errors.petName && <span className='text-red-500'>This PetName field is required</span>}
                    </div>




                    {/* maximum and total donation */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Maximum Donation ($)</span>
                            </label>
                            <input
                                defaultValue={maximumDonation}
                                {...register("maximumDonation", { required: true })}
                                name="maximumDonation"
                                type="number"
                                placeholder="Maximum Donation"
                                className="input input-bordered w-full " />
                            {errors.maximumDonation && <span className='text-red-500'>This Maximum Donation field is required</span>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Highest Total Donation ($)</span>
                            </label>
                            <input
                                defaultValue={highestTotal}
                                {...register("highestTotal", { required: true })}
                                name="highestTotal"
                                type="number"
                                placeholder="Highest Total Donation"
                                className="input input-bordered w-full " />
                            {errors.highestTotal && <span className='text-red-500'>This Highest Total field is required</span>}
                        </div>
                    </div>



                    {/* location and date */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Last Date Of The Donation</span>
                            </label>
                            <input
                                defaultValue={lastDate}
                                {...register("lastDate", { required: true })}
                                name="lastDate"
                                type="date"
                                placeholder="Last Date Of The Donation"
                                className="input input-bordered w-full " />
                            {errors.lastDate && <span className='text-red-500'>This LastDate field is required</span>}
                        </div>
                    </div>




                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <textarea defaultValue={shortDescription} {...register("shortDescription", { required: true })} name="shortDescription" className="textarea textarea-bordered h-24" placeholder="Short Description (20 words recommended)"></textarea>
                        {errors.shortDescription && <span className='text-red-500'>This Short description field is required</span>}
                    </div>
                    {/* long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Long Description</span>
                        </label>
                        <textarea defaultValue={longDescription} {...register("longDescription", { required: true })} name="longDescription" className="textarea textarea-bordered h-24" placeholder="Long Description (180 words recommended)"></textarea>
                        {errors.longDescription && <span className='text-red-500'>This Long Description field is required</span>}
                    </div>



                    <div className="text-center">
                        <button className="px-4 py-2 bg-gray-600 rounded-2xl btn-outline text-white font-bold my-4">Update Your Donation Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDonationUser;