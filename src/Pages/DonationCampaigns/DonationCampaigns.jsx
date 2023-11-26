import { Helmet } from "react-helmet-async";
import useCampaigns from "../../Hooks/useCampaigns";
import Cover from "../../Components/Cover/Cover";
import DonationCampaignsCard from "./DonationCampaignsCard";
import donationImg from '../../assets/coverImg/donationCampaigns.jpg'


const DonationCampaigns = () => {
    const [campaigns] = useCampaigns();
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Donation campaigns</title>
            </Helmet>
            <Cover img={donationImg} title={'Donation Campaigns'} description={'Heartfelt Giving: Join Our Donation Campaigns to Make a Difference in Lives, One Contribution at a Time.'}></Cover>


            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        campaigns.map(item => <DonationCampaignsCard key={item._id} item={item}></DonationCampaignsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DonationCampaigns;