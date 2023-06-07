import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { Pagination, Navigation } from 'swiper';
import './Banner.css'
const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 + progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='bg-black'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    // onDurationChange={onDurationChange}
                    className="mySwiper"
                >

                    <SwiperSlide>

                        <img className='relative  ' src="https://yrkit.rometheme.pro/magicom/wp-content/uploads/sites/2/2021/04/slider-5-1536x864.jpg" alt="" />

                        <div className='bg-black/50 w-full h-full absolute  md:pt-40 space-y-8' >
                            <div className='w-14 h-14 mx-auto text-white'>
                                <img src="https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/elementor/thumbs/Group-4-pwmoe4ev44een20ikzp8ssaqbu5hu4enoa7ya6jl6o.png" alt="" />
                            </div>

                            <h1 class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl w-3/4 mx-auto">What The Eyes See and The Ears Hear, The Mind Believes.</h1>
                            <p className='text-2xl w-3/4 mx-auto  text-white'>Porttitor at tempor vehicula molestie sed vitae dis lacus suscipit class mi ornare suspendisse sagittisPorttitor at tempor vehicula molestie sed vitae dis lacus suscipit class mi ornare suspendisse</p>

                            <div className='w-56  mx-auto '>
                                <a
                                    class="block  rounded border bg-amber-600  px-12 py-5 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                                >
                                    Get Started
                                </a>
                            </div>

                        </div>


                    </SwiperSlide>
                    {/* <SwiperSlide>

                        <img className='relative' src="https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/2022/10/smiling-female-magician-with-two-white-little-doves-in-dark-background-1536x1147.jpg" alt="" />

                        <div className='bg-black/70 w-full h-full absolute  md:pt-40 space-y-8' >
                            <div className='w-14 h-14 mx-auto text-white'>
                                <img src="https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/elementor/thumbs/Group-4-pwmoe4ev44een20ikzp8ssaqbu5hu4enoa7ya6jl6o.png" alt="" />
                            </div>

                            <h1 className=' text-8xl w-4/5 mx-auto text-yellow-500 '>What the eyes see and the ears hear, the mind believes.</h1>
                            <p className='text-2xl w-3/4 mx-auto  text-white'>Porttitor at tempor vehicula molestie sed vitae dis lacus suscipit class mi ornare suspendisse sagittisPorttitor at tempor vehicula molestie sed vitae dis lacus suscipit class mi ornare suspendisse</p>

                            <button className='bg-[#a46e02] text-slate-200 px-8 hover:scale-110 transition py-4'>Discover More </button>

                        </div>


                    </SwiperSlide> */}
                    {/* <SwiperSlide>

                        <img className='relative' src="https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/2022/10/smiling-female-magician-with-two-white-little-doves-in-dark-background-1536x1147.jpg" alt="" />

                        <div className='bg-black/50 w-full h-full absolute'>
                            yhkutyi67i
                        </div>


                    </SwiperSlide>
 */}

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </>

        </div>
    );
};

export default Banner;