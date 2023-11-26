import { Helmet } from "react-helmet-async";
import AboutUs from "../../../Components/AboutUs/AboutUs";
import Contact from "../../../Components/AboutUs/Contact";
import OverlaySection from "../../../Components/OverlaySection/OverlaySection";
import PetCategory from "../../../Components/PetCategory/PetCategory";
import Testimonials from "../../../Components/Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import RegisterLink from "../RegisterLink/RegisterLink";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Home</title>
            </Helmet>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <OverlaySection></OverlaySection>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <RegisterLink></RegisterLink>
            <Contact></Contact>
        </div>
    );
};

export default Home;