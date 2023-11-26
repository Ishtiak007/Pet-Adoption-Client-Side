import { useEffect, useState } from 'react';

const usePetListing = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/petListing')
            .then(res => res.json())
            .then(data => {
                setPets(data)
                setLoading(false)
            })
    }, [])
    return [pets, loading]
};

export default usePetListing;