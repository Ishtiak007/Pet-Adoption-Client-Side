import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://pet-adoption-server-pi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;