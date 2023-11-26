import { useContext } from "react";
import CoverTwo from "../../Components/Cover/CoverTwo";
import image1 from '../../assets/coverImg/logInCover.jpg'
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn, googleSignIn, gitHubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then((res) => {
                toast.success('Google Log In successfully!');
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials")
                console.log(error)
            })
    }

    const handleGithubLogIn = () => {
        gitHubLogin()
            .then((res) => {
                toast.success('GitHub Log In successfully!');
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials")
                console.log(error)
            })
    }
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Login</title>
            </Helmet>
            <CoverTwo image={image1} heading={'Login Now'}></CoverTwo>
            <div className="hero min-h-[80vh] bg-base-200">

                <div className="flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onClick={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="px-4 py-2 bg-red-800 rounded-2xl btn-outline text-white font-bold">Login Now</button>
                            </div>
                            <div>
                                <p className="my-3">New to here? Create an account <Link to='/signUp' className="text-blue-500 underline">Register</Link></p>
                            </div>
                            <div className="divider">or,</div>
                            <div className="space-y-3">
                                <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGoogle className="text-green-600"></FaGoogle>Continue With Google</button>
                                <button onClick={handleGithubLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGithub></FaGithub>Continue With Github</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;