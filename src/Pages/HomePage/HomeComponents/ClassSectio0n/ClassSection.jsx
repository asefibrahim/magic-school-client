import React, { useEffect, useState } from 'react';

const ClassSection = () => {
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setPopularClasses(data.slice(0, 6)))
    }, [])

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-[#b07603]  sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            Our Top CLasses <br />
                            <br className="hidden md:block" />
                            Based On Number of Student
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-200 lg:text-sm lg:max-w-md">
                        "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
                        accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
                        perspiciatis unde omnis iste."
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">

                    {
                        popularClasses.map((singleClass, index) => <div key={index} className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={singleClass.image}
                                alt=""
                            />2
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Class Name :  {singleClass.name}
                                </p>
                            </div>
                        </div>)
                    }



                </div>
                <div className="text-center">
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ClassSection;
