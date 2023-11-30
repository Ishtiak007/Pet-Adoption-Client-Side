
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCampaigns = () => {
    // const [campaigns, setCampaigns] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://pet-adoption-server-pi.vercel.app/campaigns')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCampaigns(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [campaigns, loading]




    const axiosPublic = useAxiosPublic();

    const { data: campaigns = [], isPending: loading, refetch } = useQuery({
        queryKey: ['petListing'],
        queryFn: async () => {
            const res = await axiosPublic.get('/campaigns');
            return res.data;
        }
    })

    return [campaigns, loading, refetch]
};

export default useCampaigns;