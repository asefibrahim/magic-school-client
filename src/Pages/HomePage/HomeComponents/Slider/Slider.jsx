import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
const Slider = () => {
    return (
        <div >
            <div className='bg-black' >
                <Swiper
                    style={{
                        height: '600px',


                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper h-full  top-0"
                >
                    <div
                        slot="container-start"

                        style={{
                            "backgroundImage":
                                "url(https://wallpaperaccess.com/full/4447041.jpg)",
                        }}

                    ></div>

                    <SwiperSlide>
                        <div className="text bg-[url(https://yrkit.rometheme.pro/magicom/wp-content/uploads/sites/2/2021/04/slider-6-1536x864.jpg)]" data-swiper-parallax="-150">
                            <div className='lg:flex md:flex items-center justify-center   pt-10 pb-10  bg-black/70 px-8'>
                                <div className="card   w-full p-5 mx-auto lg:mt-24">
                                    <iframe className=' border-8 border-orange-500  rounded-lg rounded-tl-full  lg:h-96  md:h-64 h-60' src="https://embed.lottiefiles.com/animation/75745"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl text-slate-200'>GO SAFE, MOVE SAFE</p>
                                    <p className='lg:text-5xl text-3xl md:text-xl  uppercase my-8 text-slate-200'>significant  <span className='text-orange-500'> presence in</span> the entertainment industry</p>

                                    <div>
                                        <a
                                            class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-white  focus:ring active:text-opacity-75"

                                        >
                                            <span
                                                class="block rounded-sm px-8 py-3 text-sm font-medium hover:bg-transparent"
                                            >
                                                Get Started
                                            </span>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text bg-[url(https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/2022/10/smiling-female-magician-with-two-white-little-doves-in-dark-background-1536x1147.jpg)]" data-swiper-parallax="-150">
                            <div className='lg:flex md:flex items-center justify-center   pt-10 pb-10  bg-black/70 px-8'>
                                <div className="card   w-full p-5 mx-auto lg:mt-24">
                                    <iframe className=' border-8 border-orange-500  rounded-lg rounded-tl-full  lg:h-96  md:h-64 h-60' src="https://embed.lottiefiles.com/animation/75745"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl text-slate-200'>GO SAFE, MOVE SAFE</p>
                                    <p className='lg:text-5xl text-3xl md:text-xl  uppercase my-8 text-slate-200'>significant  <span className='text-orange-500'> presence in</span> the entertainment industry</p>

                                    <div>
                                        <a
                                            class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]    text-white focus:outline-none focus:ring active:text-opacity-75"

                                        >
                                            <span
                                                class="block rounded-sm  px-8 py-3 text-sm font-medium bg-transparent"
                                            >
                                                Get Started
                                            </span>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text bg-[url(https://yrkit.rometheme.pro/magicom/wp-content/uploads/sites/2/2021/04/slider-5-1536x864.jpg)]" data-swiper-parallax="-150">
                            <div className='lg:flex md:flex items-center justify-center   pt-10 pb-10  bg-black/70 px-8'>
                                <div className="card   w-full p-5 mx-auto lg:mt-24">
                                    <iframe className=' border-8 border-orange-500  rounded-lg rounded-tl-full  lg:h-96  md:h-64 h-60' src="https://embed.lottiefiles.com/animation/75745"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl text-slate-200'>GO SAFE, MOVE SAFE</p>
                                    <p className='lg:text-5xl text-3xl md:text-xl  uppercase my-8 text-slate-200'>significant  <span className='text-orange-500'> presence in</span> the entertainment industry</p>

                                    <div>
                                        <a
                                            class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]    text-white focus:outline-none focus:ring active:text-opacity-75"

                                        >
                                            <span
                                                class="block rounded-sm  px-8 py-3 text-sm font-medium bg-transparent"
                                            >
                                                Get Started
                                            </span>
                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
