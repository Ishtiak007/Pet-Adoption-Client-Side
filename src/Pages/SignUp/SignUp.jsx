import { useForm } from "react-hook-form";
import CoverTwo from "../../Components/Cover/CoverTwo";
import registerCover from '../../assets/coverImg/registerCover.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user Updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Log in Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Register</title>
            </Helmet>
            <CoverTwo image={registerCover} heading={'Register Now'}></CoverTwo>

            <div className="hero min-h-screen bg-base-200">

                <div className="flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This Name field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>photoURL field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This Email field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16,
                                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                                    })} placeholder="Password" className="input input-bordered" />
                                {errors.password && <span className='text-red-500'>This Password field is required</span>}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-400'>Password must me 6 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-400'>Password must be A small letter, a capitel letter and a special character</p>
                                )}
                            </div>


                            <div className="form-control mt-6">
                                <button className="px-4 py-2 bg-sky-700 rounded-2xl btn-outline text-white font-bold">Register Now</button>
                            </div>


                            <div>
                                <p className="my-3">Already have an account? so, please <Link to='/login' className="text-blue-500 underline">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;