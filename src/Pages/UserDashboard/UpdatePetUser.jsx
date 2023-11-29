import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatePetUser = () => {
    const { petName, category, petAge, petLocation, shortDescription, longDescription, date, _id } = useLoaderData();
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
                category: data.category,
                petAge: data.petAge,
                petLocation: data.petLocation,
                date: data.date,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                adopted: false
            }
            const petResult = await axiosSecure.patch(`/petListing/${_id}`, petLists);
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
            <SectionTitle heading={'Update Pet (USER)'} subHeading={'Update your added pet from here'}></SectionTitle>
            <div className=" bg-indigo-200 p-3 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">


                        {/* photo input */}
                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Pet Image</span>
                            </label>
                            <input
                                {...register("image", { required: true })}
                                type="file"
                                name="image"
                                className="file-input w-full" />
                            {errors.image && <span className='text-red-500'>This Image field is required</span>}
                        </div>
                        {/* pet name */}
                        <label className="label">
                            <span className="label-text font-bold">Pet Name</span>
                        </label>
                        <input
                            {...register("petName", { required: true })}
                            defaultValue={petName}
                            name="petName"
                            type="text"
                            placeholder="Pet Name"
                            className="input input-bordered w-full " />
                        {errors.petName && <span className='text-red-500'>This Pet Name field is required</span>}
                    </div>




                    {/* category and pet age */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Category Name</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category", { required: true })}
                                name="category"
                                className="select select-bordered w-full">
                                <option value={'cat'}>Cat</option>
                                <option value={'dog'}>Dog</option>
                                <option value={'bird'}>Bird</option>
                                <option value={'rabbit'}>Rabbit</option>
                                <option value={'fish'}>Fish</option>
                                <option value={'domestic'}>Domestic</option>
                            </select>
                            {errors.category && <span className='text-red-500'>This Category field is required</span>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Pet Age</span>
                            </label>
                            <input
                                defaultValue={petAge}
                                {...register("petAge", { required: true })}
                                name="petAge"
                                type="number"
                                placeholder="Pet Age"
                                className="input input-bordered w-full " />
                            {errors.petAge && <span className='text-red-500'>This Pet Age field is required</span>}
                        </div>
                    </div>



                    {/* clocation and date */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Pet Location</span>
                            </label>
                            <input
                                defaultValue={petLocation}
                                {...register("petLocation", { required: true })}
                                name="petLocation"
                                type="text"
                                placeholder="Pet Location"
                                className="input input-bordered w-full " />
                            {errors.petLocation && <span className='text-red-500'>This Pet Location field is required</span>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Adding Date</span>
                            </label>
                            <input
                                defaultValue={date}
                                {...register("date", { required: true })}
                                name="date"
                                type="date"
                                placeholder="Date"
                                className="input input-bordered w-full " />
                            {errors.date && <span className='text-red-500'>This Adding Date field is required</span>}
                        </div>
                    </div>




                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <textarea
                            defaultValue={shortDescription}
                            {...register("shortDescription", { required: true })}
                            name="shortDescription"
                            className="textarea textarea-bordered h-24"
                            placeholder="Short Description (20 words recommended)"></textarea>
                        {errors.shortDescription && <span className='text-red-500'>This Short Description field is required</span>}
                    </div>
                    {/* long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Long Description</span>
                        </label>
                        <textarea
                            defaultValue={longDescription}
                            {...register("longDescription", { required: true })}
                            name="longDescription"
                            className="textarea textarea-bordered h-24"
                            placeholder="Long Description (180 words recommended)"></textarea>
                        {errors.longDescription && <span className='text-red-500'>This Long Description field is required</span>}
                    </div>



                    <div className="text-center">
                        <button type="submit" className="btn bg-sky-600 rounded-2xl btn-outline text-white font-bold my-4">Update Your Pet</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePetUser;