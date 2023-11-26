import { useEffect, useState } from 'react';

const useCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data)
                setLoading(false)
            })
    }, [])
    return [campaigns, loading]
};

export default useCampaigns;