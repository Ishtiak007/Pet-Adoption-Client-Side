import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePetListingEmail = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: petListing = [] } = useQuery({
        queryKey: ['petListing', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/petListing?email=${user.email}`)
            return res.data;
        }
    })
    return [petListing, refetch]
};

export default usePetListingEmail;