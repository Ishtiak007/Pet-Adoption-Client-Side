import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PetDetails from "../Pages/PetDetails/PetDetails";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import CampaignsDetails from "../Pages/DonationCampaigns/CampaignsDetails";
import DashBoard from "../Layout/DashBoard";
import AddPet from "../Pages/UserDashboard/AddPet/AddPet";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/petListing',
                element: <PrivateRoute><PetListing></PetListing></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/petDetails/:id',
                element: <PetDetails></PetDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/petListing/${params.id}`)
            },
            {
                path: '/donationCampaigns',
                element: <PrivateRoute><DonationCampaigns></DonationCampaigns></PrivateRoute>
            },
            {
                path: '/campaingsDetails/:id',
                element: <CampaignsDetails></CampaignsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'addPet',
                element: <AddPet></AddPet>
            }
        ]
    }
]);