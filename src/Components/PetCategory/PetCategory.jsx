import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const PetCategory = () => {
    const [category, petCategory] = useState([]);
    useEffect(() => {
        fetch('https://pet-adoption-server-pi.vercel.app/category')
            .then(res => res.json())
            .then(data => petCategory(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={'Pets To adoption'} subHeading={'Pawfect Pursuits: Explore Our Pet-Approved Products and Accessories for Every Companion.'}></SectionTitle>
            <div className="lg:flex justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5">
                    {
                        category.map(data => <CategoryCard key={data._id} data={data}></CategoryCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default PetCategory;