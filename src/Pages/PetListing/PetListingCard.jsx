import { Link } from "react-router-dom";


const PetListingCard = ({ item }) => {
    const { image, petName, petAge, date, location, shortDescription, category } = item
    return (
        <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl my-6">
            <div className="card-body">
                <h2 className="text-2xl font-medium">Pet Name: {petName}</h2>
                <p>Pet Age: {petAge}</p>
                <p>Category: {category}</p>
            </div>
            <figure><img src={image} className="h-64 w-full" alt="Image" /></figure>
            <div className="card-body">
                <h2 className="font-bold">{location}</h2>
                <p>{shortDescription}</p>
                <p className="font-semibold">Date: {date}</p>
                <div className="card-actions justify-end">
                    <Link><button className="bg-sky-500 px-4 py-1 rounded-3xl text-white font-bold">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PetListingCard;