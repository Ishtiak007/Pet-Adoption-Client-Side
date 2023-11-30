import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PaymentInformation = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: donations = [] } = useQuery({
        queryKey: ['payments', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text3-xl text-center my-4 text-orange-400 font-bold">Donations: {donations.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Donator Email</th>
                            <th>Donation Amount</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation, index) => <tr key={donation._id}>
                            <th>{index + 1}</th>
                            <td>${donation.email}</td>
                            <td>${donation.price}</td>
                            <td>{donation.transactionId}</td>
                            <td>{donation.date}</td>
                            <td>{donation.status}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentInformation;