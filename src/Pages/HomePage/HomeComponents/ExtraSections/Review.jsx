import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import './Css/slider.css'
// Import Swiper styles

import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../../components/SectionTitle';
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20 ">
            <SectionTitle
                subHeading="What Our Student Say"
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="bg-red-500">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16 bg-black/30 px-28 py-12 rounded-xl">

                            <img className='w-20 mb-5 h-20 rounded-full object-cover' src={review.image} alt="" />

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8 text-center text-slate-200">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Review;