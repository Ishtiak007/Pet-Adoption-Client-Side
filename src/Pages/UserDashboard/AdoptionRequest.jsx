
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAdoptorAdderEmail from "../../Hooks/useAdoptorAdderEmail";
import { FaCheck, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AdoptionRequest = () => {
    const [adoptor, refetch] = useAdoptorAdderEmail();
    const axiosSecure = useAxiosSecure()


    const handleDeleteItem = (item) => {
        console.log(item)
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
                const res = await axiosSecure.delete(`/adoptionUsers/${item._id}`);
                if (res.data.deletedCount > 0) {
                    // refetch to update the profile
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Request has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'Manage All Pets (ADMIN)'} subHeading={'Manage All pets from here'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index ({adoptor.length})
                                </th>
                                <th>Pet Image</th>
                                <th>Pet Name</th>
                                <th>Adoptor Email</th>
                                <th>Adoptor Phone Number</th>
                                <th>Location</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                adoptor.map((item, index) => <tr key={item._id}>
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
                                    <td>{item.adoptorEmail}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        {item.address}
                                    </td>
                                    <td>
                                        <button className="btn"><FaCheck className="text-green-600"></FaCheck></button>

                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn"><FaTrash className="text-red-500"></FaTrash></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdoptionRequest;