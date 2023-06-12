import React, { useEffect, useState } from 'react';
import Banner from './Banner';

const AllInstructors = () => {

    const [AllInstructors, setAllInstructors] = useState([])
    useEffect(() => {
        fetch('https://illusion-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setAllInstructors(data))
    }, [])
    console.log(AllInstructors);

    return (
        <div>
            <Banner title={'Meet  our all the talented instructors'}

                img={"https://embed.lottiefiles.com/animation/72882"}
            ></Banner>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">




                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">


                    {
                        AllInstructors.map((single, index) => <div key={index}>
                            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-96 hover:border-amber-500/100 hover:shadow-sky-500/100 ">
                                <img
                                    className="object-cover w-full  md:h-96 xl:h-96"
                                    src={single.image}
                                    alt="Person"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                    <p className="mb-1 text-lg font-bold text-gray-100">
                                        {single.name}
                                    </p>
                                    <p className="mb-4 text-lg text-gray-100">Email :  {single.email}</p>
                                    <p className="mb-4 text-lg tracking-wide text-gray-400">
                                        Taken Classes : {single.taken_classes}
                                    </p>

                                    <div className='w-3/4 mx-auto '>



                                        <button className='btn btn-outline text-slate-200 '>See Classes</button>

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }



                </div>
            </div>

        </div>
    );
};

export default AllInstructors;