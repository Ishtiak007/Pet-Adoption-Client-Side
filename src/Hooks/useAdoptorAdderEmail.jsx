
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdoptorAdderEmail = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: adoptor = [], refetch } = useQuery({
        queryKey: ['adoptionUsers', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adoptionUsers?email=${user.email}`)
            return res.data;
        }
    })
    return [adoptor, refetch]
};

export default useAdoptorAdderEmail;