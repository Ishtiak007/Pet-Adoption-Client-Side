import { FaCat, FaCcAmazonPay, FaDochub, FaDog, FaDonate, FaOdnoklassniki, FaPaw, FaRegQuestionCircle, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo/petLogo-removebg-preview.png'
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const navLinks = <>
        <li><Link className='font-semibold text-black' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-black' to='/petListing'>Pet Listing</Link></li>
        <li><Link className='font-semibold text-black' to='/donationCampaigns'>Donation Campaings</Link></li>
    </>


    const [isAdmin] = useAdmin();
    return (
        <div>


            <div className="navbar bg-gray-100 mt-5 lg:w-1/2 mx-auto rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} className="w-32" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>




            <div className="lg:flex md:flex mt-4">
                <div className="lg:w-64 md:w-64 min-h-screen bg-sky-100 rounded-md">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h1 className="text-center my-5 font-bold text-2xl">Admin Dashboard</h1>

                                <li>
                                    <NavLink to='/dashboard/makeAdmin'><FaUsers></FaUsers>All Users / Make Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageAllPets'><FaPaw></FaPaw>Manage All Pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allDonations'><FaCcAmazonPay></FaCcAmazonPay>All Donation Campaigns</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addPet'><FaCat></FaCat>Add a pet (Admin)</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/createDonationCampaign'><FaDonate></FaDonate>Create Donation Campaign</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/myAddedPets'><FaDog></FaDog>Admin added pets</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/petAdoptor'><FaRegQuestionCircle></FaRegQuestionCircle>Adoption Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'><FaDochub></FaDochub>My Donations</NavLink>
                                </li>

                            </>
                                :

                                <>
                                    <h1 className="text-center my-5 font-bold text-2xl">User Dashboard</h1>
                                    <li>
                                        <NavLink to='/dashboard/addPet'><FaCat></FaCat>Add a pet (User)</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/createDonationCampaign'><FaDonate></FaDonate>Create Donation Campaign</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myAddedPets'><FaDog></FaDog>My added pets</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myDonationCampaign'><FaOdnoklassniki></FaOdnoklassniki>My Donation Campaigns</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/petAdoptor'><FaRegQuestionCircle></FaRegQuestionCircle>Adoption Request</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'><FaDochub></FaDochub>My Donations</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;