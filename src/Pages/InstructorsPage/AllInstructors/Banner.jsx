import React from 'react';

const Banner = ({ title, img, }) => {
    return (
        <div>
            <section class="bg-slate-950 h-[500px] md:flex gap-5  items-center text-white pe-16" >
                <div
                    class=" py-32 px-12 "

                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div class="mx-auto  text-start">
                        <h1
                            class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl w-3/4"
                        >
                            {title}
                        </h1>

                        <p class="mt-4 max-w-xl sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div class="mt-8 flex flex-wrap r gap-4">
                            <a
                                class="block w-full rounded border    px-12 py-3 text-sm font-medium 
                                
                                bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]    text-white
                                focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                            >
                                Get Started
                            </a>



                            <a
                                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <iframe className='  text-white border-orange-500  rounded-lg rounded-tl-full  lg:h-[600px] w-full  md:h-full h-60' src={img}></iframe>
                </div>
            </section>
        </div>
    );
};

export default Banner;