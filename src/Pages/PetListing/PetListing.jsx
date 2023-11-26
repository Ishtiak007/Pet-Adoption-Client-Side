import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import petListingImg from '../../assets/coverImg/petListing.jpg'
import { FaCat } from "react-icons/fa";
import usePetListing from "../../Hooks/usePetListing";
import PetListingCard from "./PetListingCard";

const PetListing = () => {
    const [pets] = usePetListing();
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Pet Listing</title>
            </Helmet>
            <Cover img={petListingImg} title={'Pet Listing'} description={'Explore our curated pet listing page, featuring adorable profiles ready for loving homes. Find your perfect companion today!'}></Cover>



            <div className="flex flex-col w-full lg:flex-row my-5">

                <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
                    <form className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Whats the name of the pet?</span>
                        </label>

                        <input type="text" placeholder="Pet Name" className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-info text-white mt-3">Search Now</button>
                    </form>
                </div>


                <div className="divider lg:divider-horizontal"><FaCat className="text-7xl text-sky-500"></FaCat></div>


                <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
                    <form className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick your pet category</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick One Category</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                        <button className="btn btn-info text-white mt-3">Search Now</button>
                    </form>
                </div>
            </div>



            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        pets.map(item => <PetListingCard key={item._id} item={item}></PetListingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PetListing;