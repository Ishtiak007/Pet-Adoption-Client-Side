import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/BP7MczL/img3.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                <div>
                                    <h1 className="text-2xl text-white lato"> Explore Our Adoptable Pets Today</h1>
                                    <p className="text-sm text-white my-2">Warm hearts, wagging tails: Embrace the joy of pet adoption. Find your perfect companion now!</p>
                                    <Link to='/petListing'><button className="btn  bg-[#FF4880] hover:bg-[#FF4860] text-white px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>



                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/tpMCRkq/img7.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                <div>
                                    <h1 className="text-2xl text-white lato">Home is Where the Paw Prints Are: Adopt a Pet</h1>
                                    <p className="text-sm text-white my-2">Adopt a friend, be a hero! Your new adventure begins with our lovable, furry companions.</p>
                                    <Link to='/petListing'><button className="btn  bg-[#FF4880] hover:bg-[#FF4860] text-white px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>



                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/QDQ6FJB/img4.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                <div>
                                    <h1 className="text-2xl text-white lato">Pawsitively Perfect Companions: Adopt from Us</h1>
                                    <p className="text-sm text-white my-2">From shelter to snuggles: Explore our adoptable pets and give a deserving friend a home.</p>
                                    <Link to='/petListing'><button className="btn  bg-[#FF4880] hover:bg-[#FF4860] text-white px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>



                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/sHH6SXM/img1.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                <div>
                                    <h1 className="text-2xl text-white lato">Rescue, Love, Repeat: Your New Best Friend Awaits</h1>
                                    <p className="text-sm text-white my-2">Change a world with adoption! Meet your match among our lovable, ready-for-home pets today.</p>
                                    <Link to='/petListing'><button className="btn  bg-[#FF4880] hover:bg-[#FF4860] text-white  px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>



                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/q1vcBtp/img6.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                <div>
                                    <h1 className="text-2xl text-white lato">Adopt a Fur-ever Friend: Browse Our Adorable Pets</h1>
                                    <p className="text-sm text-white my-2">Create happiness: Adopt a pet, save a life. Unconditional love awaits in our furry companions.</p>
                                    <Link to='/petListing'><button className="btn  bg-[#FF4880] hover:bg-[#FF4860] text-white  px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>



                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/0y27SxG/lisa-therese-P0-GTa-9bmac-unsplash.jpg')] h-[400px] lg:h-[700px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="flex justify-center items-center h-full w-full text-center  absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                                <div className="max-w-2xl bg-gray-700 opacity-70 p-3 rounded-md">
                                    <div>
                                        <h1 className="text-2xl text-white lato">From Shelter to Forever Home: Adopt a Pet with Us</h1>
                                        <p className="text-sm text-white my-2">Transform lives and bring joy: Explore our adoptable pets and find your forever furry friend!</p>
                                        <Link to='/petListing'><button className="btn bg-[#FF4880] hover:bg-[#FF4860] text-white  px-4 py-[2px] rounded-2xl">Get Started</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;