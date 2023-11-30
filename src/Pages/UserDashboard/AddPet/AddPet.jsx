
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


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
                dateAndTime: new Date,
                adopted: false,
                email: user?.email,
            }
            const petResult = await axiosSecure.post('/petListing', petLists);
            if (petResult.data.insertedId) {
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
            <div className=" bg-zinc-300 p-3 rounded-md">
                <SectionTitle heading={'Add a pet'} subHeading={'Add a pet from here'}></SectionTitle>
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
                                defaultValue={'default'}
                                {...register("category", { required: true })}
                                name="category"
                                className="select select-bordered w-full">
                                <option value={'default'} disabled>select a value</option>
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
                            {...register("longDescription", { required: true })}
                            name="longDescription"
                            className="textarea textarea-bordered h-24"
                            placeholder="Long Description (180 words recommended)"></textarea>
                        {errors.longDescription && <span className='text-red-500'>This Long Description field is required</span>}
                    </div>



                    <div className="text-center">
                        <button type="submit" className="btn bg-sky-600 rounded-2xl btn-outline text-white font-bold my-4">Add Your Pet</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPet;