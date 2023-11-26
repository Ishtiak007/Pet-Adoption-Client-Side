
import { Link } from 'react-router-dom';

const DonationCampaignsCard = ({ item }) => {
    const { _id, petName, image, maximumDonation, highestTotal, lastDate, shortDescription } = item
    return (
        <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl my-6">
            <div className="card-body">
                <p className="font-semibold">Maximum Donation: {maximumDonation} $</p>
                <p className="font-semibold">Highest Donation: {highestTotal} $</p>
                <p className="font-semibold">Last Date: {lastDate}</p>
            </div>
            <figure><img src={image} className="h-64 w-full" alt="Image" /></figure>
            <div className="card-body">
                <p className='font-bold'>Pet Name : {petName}</p>
                <p className='text-gray-500'>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <Link to={`/campaingsDetails/${_id}`}><button className="bg-sky-500 px-4 py-1 rounded-3xl text-white font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaignsCard;