
import { Link } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useCampaigns from '../../Hooks/useCampaigns';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageAllDonations = () => {
    const [campaigns, , refetch] = useCampaigns();
    const axiosSecure = useAxiosSecure();


    const handleDeleteDonation = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/campaigns/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} related Donation has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'All Donation'} subHeading={'All information about donation'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index ({campaigns.length})
                                </th>
                                <th>Image</th>
                                <th>Pet Name</th>
                                <th>Maximum Donation</th>
                                <th>Highest Total</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                campaigns.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.petName}
                                    </td>
                                    <td>
                                        {item.maximumDonation}
                                    </td>
                                    <td>{item.highestTotal}</td>
                                    <td>
                                        <Link to={`/dashboard/updateDonation/${item._id}`}>
                                            <button className="btn"><FaEdit className="text-sky-600"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDeleteDonation(item)} className="btn"><FaTrash className="text-red-600"></FaTrash></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllDonations;