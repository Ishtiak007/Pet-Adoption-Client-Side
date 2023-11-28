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
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import CreateDonationCampaign from "../Pages/UserDashboard/AddPet/CreateDonationCampaign";
import AdminRoute from "./AdminRoute";
import ManageAllPets from "../Pages/AdminDashboard/ManageAllPets";
import UpdatePet from "../Pages/AdminDashboard/UpdatePet";

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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'addPet',
                element: <AddPet></AddPet>
            },
            {
                path: 'createDonationCampaign',
                element: <CreateDonationCampaign></CreateDonationCampaign>
            },








            // Admin Routes
            {
                path: 'makeAdmin',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: 'manageAllPets',
                element: <AdminRoute><ManageAllPets></ManageAllPets></AdminRoute>
            },
            {
                path: 'updatePet/:id',
                element: <AdminRoute><UpdatePet></UpdatePet></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/petListing/${params.id}`)
            }

        ]
    }
]);