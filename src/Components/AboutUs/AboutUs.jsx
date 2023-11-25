import SectionTitleTwo from "../SectionTitle/SectionTitleTwo";
import AdoptUs from "./AdoptUs";
import FaqSsection from "./FaqSsection";
import OurWork from "./OurWork";
const AboutUs = () => {
    return (
        <div className="bg-slate-50">
            <SectionTitleTwo heading={'About Us'} subHeading={'Crafting Connections: Unveiling Our Collective Journey'} description={'We are a passionate community dedicated to. Together, we foster connection, share knowledge, and create meaningful experiences. Join us in our common journey.'}></SectionTitleTwo>
            <OurWork></OurWork>
            <FaqSsection></FaqSsection>
            <AdoptUs></AdoptUs>
        </div>
    );
};

export default AboutUs;