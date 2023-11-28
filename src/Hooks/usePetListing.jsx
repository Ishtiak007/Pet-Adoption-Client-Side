import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePetListing = () => {
    const axiosPublic = useAxiosPublic();

    const { data: pets = [], isPending: loading, refetch } = useQuery({
        queryKey: ['petListing'],
        queryFn: async () => {
            const res = await axiosPublic.get('/petListing');
            return res.data;
        }
    })

    return [pets, loading, refetch]
};

export default usePetListing;