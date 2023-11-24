import OverlaySection from "../../../Components/OverlaySection/OverlaySection";
import PetCategory from "../../../Components/PetCategory/PetCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <OverlaySection></OverlaySection>
        </div>
    );
};

export default Home;