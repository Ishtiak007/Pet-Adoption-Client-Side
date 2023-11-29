import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useDonationCampaignEmail = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: campaigns = [], refetch } = useQuery({
        queryKey: ['campaigns', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/campaigns?email=${user.email}`)
            return res.data;
        }
    })
    return [campaigns, refetch]
};

export default useDonationCampaignEmail;