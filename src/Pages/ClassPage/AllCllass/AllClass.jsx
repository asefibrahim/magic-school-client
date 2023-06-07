import React, { useEffect, useState } from 'react';
import Banner from '../../InstructorsPage/AllInstructors/Banner';

const AllClass = () => {
    const [allClass, setAllClass] = useState([])
    useEffect(() => {
        fetch('pclass.json')
            .then(res => res.json())
            .then(data => setAllClass(data))

    }, [])
    console.log(allClass);

    return (
        <div>
            <Banner></Banner>

            <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-[#1d1c1c]'>

                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>


                    {
                        allClass.map((SClass, index) => <div key={index} class="max-w-lg overflow-hidden bg-slate-900   transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl  dark:bg-gray-800">
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-300 uppercase dark:text-white">{SClass.name}</h1>
                                <p class="mt-1 text-lg text-gray-400 dark:text-gray-400">

                                    <span className='font-semibold'>  Instructor Name</span> : {SClass.instructor_name}

                                </p>
                                <p class="mt-1 text-lg text-gray-400 dark:text-gray-400">

                                    <span className='font-semibold'>  Available Seats</span> : {SClass.available_seats
                                    }

                                </p>

                            </div>

                            <img class="object-cover w-full h-64 mt-2" src={SClass.image} alt="NIKE AIR" />

                            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                                <h1 class="text-lg font-bold text-slate-300">$ {SClass.price}</h1>
                                <button class="px-3 py-1 text-sm  font-semibold text-gray-700  transition-colors duration-300 transform bg-yellow-600 rounded hover:bg-gray-200 focus:outline-none">Select Class</button>
                            </div>
                        </div>)
                    }





                </div>



            </div>

        </div>
    );
};

export default AllClass;