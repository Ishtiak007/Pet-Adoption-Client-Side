import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useDonationCampaignEmail from "../../Hooks/useDonationCampaignEmail";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyAddedDonationCamp = () => {
    const [campaigns, refetch] = useDonationCampaignEmail();
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();

    // {email,dateAndTime,longDescription,shortDescription,lastDate,highestTotal,maximumDonation,image,petName}


    const handleDeletePet = (item) => {
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
                        title: `Your Added ${item.name}, ${item.category} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>


            <SectionTitle heading={'Your Donation Campaigns'} subHeading={'Your All donation campaigns information is here'}></SectionTitle>

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
                                <th>Maximum Donation Amount</th>
                                <th>Donation Progressbar</th>
                                <th>View Donator</th>
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
                                    <td>{item.maximumDonation}</td>
                                    <td>
                                        <progress className="progress progress-info w-56" value={item.highestTotal} max={item.maximumDonation}></progress>
                                    </td>
                                    <td>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>View Donator</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <div>
                                                    <h1>Donator Email :  {item.email}</h1>
                                                </div>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateDonationCampaign/${item._id}`}>
                                            <button className="btn"><FaEdit className="text-sky-600"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDeletePet(item)} className="btn"><FaTrash className="text-red-600"></FaTrash></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedDonationCamp;