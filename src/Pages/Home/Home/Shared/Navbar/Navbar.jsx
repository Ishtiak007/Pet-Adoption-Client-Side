import { Link } from 'react-router-dom';
import navLogo from '../../../../../assets/logo/petLogo-removebg-preview.png'
import { FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/petListing'>Pet Listing</Link></li>
        <li><Link className='font-semibold text-white' to='/donationCampaigns'>Donation Campaings</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
            })
            .catch(() => {
                toast.error("Something wrong. Please Try again")
            })
    }
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-[1450px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-slate-700 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl"><img className='w-32' src={navLogo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-left z-10">
                        <label tabIndex={0} className="m-5">
                            <Link>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {
                                            user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                        }
                                    </div>
                                </div>
                            </Link>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-700 rounded-box w-52">
                            <div>
                                <div className='my-5 text-xs text-white'>User Email : <br />{user ? <>{user.email}</> : <span className='text-red-500 font-bold'>You are not Log in</span>}</div>
                                <li><Link className='font-semibold text-gray-200 my-2 mx-auto'><button className='px-3 py-1 rounded-md bg-orange-500 hover:bg-orange-600  w-full'>Dashboard</button></Link></li>
                                <li><Link className='font-semibold text-gray-200 mx-auto' ><button onClick={handleLogOut} className='px-3 py-1 rounded-md bg-orange-500 hover:bg-orange-600 w-full'>Log Out</button></Link></li>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;