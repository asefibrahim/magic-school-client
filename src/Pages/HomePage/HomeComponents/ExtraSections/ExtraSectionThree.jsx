import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Css/SecThree.css'
import SectionTitle from '../../../../components/SectionTitle';


const ExtraSectionThree = () => {
    return (
        <div className='border-none mt-20 '>
            <SectionTitle

                heading={'Magic Gallery'}
                subHeading={'Magic Made it Easy'}
            ></SectionTitle>


            <div className=' mx-auto px-5 py-5 lg:px-40 lg:py-24' >

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg "
                        data-swiper-parallax="-15%"
                    ></div>
                    <SwiperSlide>
                        <a className="group  relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.pexels.com/photos/230898/pexels-photo-230898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-800 p-6 text-center tracking-widest text-white transition-colors  group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic  Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1498575207492-cfbed56146c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-black p-6 text-center tracking-widest text-white transition-colors group-hover:bg-red-800 sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.pexels.com/photos/3428289/pexels-photo-3428289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-black p-6 text-center tracking-widest text-white transition-colors group-hover:bg-red-800 sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.pexels.com/photos/4665930/pexels-photo-4665930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-800 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.pexels.com/photos/3823271/pexels-photo-3823271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.pexels.com/photos/3428278/pexels-photo-3428278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Magic Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Magic</p>
                            </div>
                        </a>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >

    );
};

export default ExtraSectionThree;