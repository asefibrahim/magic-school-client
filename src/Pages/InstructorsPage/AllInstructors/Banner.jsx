import React from 'react';

const Banner = ({ title }) => {
    return (
        <div>
            <section class="bg-gray-900 h-[500px] text-white">
                <div
                    class="mx-auto max-w-screen-xl px-4  lg:flex py-32 lg:items-center"
                >
                    <div class="mx-auto max-w-3xl text-center">
                        <h1
                            class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Here's Our Most Talented

                            <span class="sm:block"> All The Instructors. </span>
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                class="block w-full rounded border bg-amber-600  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                            >
                                Get Started
                            </a>

                            <a
                                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;