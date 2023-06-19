import React from 'react';
import { FaLandmark, FaRegFile, FaUserNurse } from 'react-icons/fa';

const ExtraSectionTwo = () => {
    return (
        <div>
            <section className='mt-20 mb-20'>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div data-aos="fade-up-right"
                                data-aos-duration="1500"

                                class="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://kitnew.moxcreative.com/magickom/wp-content/uploads/sites/4/2022/10/he-s-takes-your-card-magician-in-black-suit-standing-in-the-room-with-special-lighting-at-backstage-1536x1025.jpg"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div class="relative flex  w-full bg-black/30">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-black/30"
                            ></span>

                            <div data-aos="fade-up-left"
                                data-aos-duration="1000" class=" sm:p-16 space-y-5 lg:p-10 text-orange-400 px-6 ">
                                <h2 class="text-2xl font-bold sm:text-2xl mt-5   mb-2">
                                    BENEFIT OUR CLASSES
                                </h2>
                                <h2 class="text-2xl font-medium sm:text-4xl  w-full mb-5">
                                    Take a lover who looks at you like maybe you are magic
                                </h2>
                                <p className='text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                                <div className='flex items-center gap-5 mt-5'>
                                    <div className=' border-2 mt-5 border-orange-500 w-16 h-16 flex items-center'>
                                        <FaLandmark className='w-16 text-orange-400 '></FaLandmark>
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold sm:text-2xl mt-6'>Free register membership.</h1> <br />

                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-5'>
                                    <div className=' border-2 mt-5 border-orange-500 w-16 h-16 flex items-center'>
                                        <FaUserNurse className='w-16 text-orange-400 '></FaUserNurse>
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold sm:text-2xl mt-6'>
                                            Discount for our merch.</h1> <br />

                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-5'>
                                    <div className=' border-2 mt-5 border-orange-500 w-16 h-16 flex items-center'>
                                        <FaRegFile className='w-16 text-orange-400 '></FaRegFile>
                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold sm:text-2xl mt-6'>24/7 premium support</h1> <br />

                                    </div>
                                </div>

                                <div className='pt-8'>
                                    <a
                                        class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]    text-white focus:outline-none focus:ring active:text-opacity-75 "

                                    >
                                        <span
                                            class="block rounded-sm  px-8 py-3 text-sm font-medium bg-transparent"
                                        >
                                            Get in Touch
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSectionTwo;