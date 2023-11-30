
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaComments } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pet-adoption-server-pi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What our regular well-wisher say'}
                heading={'Testimonials'}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="card card-compact bg-base-100 shadow-xl my-5">
                            <div className="card-body">
                                <FaComments className="text-5xl text-orange-300"></FaComments>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                <p>{review.details}</p>
                                <div className="card-title mx-auto"> <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                /></div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;