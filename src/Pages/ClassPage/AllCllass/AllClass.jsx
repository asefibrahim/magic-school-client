import React, { useContext, useEffect, useState } from 'react';
import Banner from '../../InstructorsPage/AllInstructors/Banner';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';
import '../../InstructorsPage/bg/bg.css'
import CardLoading from '../../../components/CardLoading';
const AllClass = () => {
    const [allClass, setAllClass] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://illusion-school-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAllClass(data))
        setLoading(false)

    }, [])


    const handleSelect = (singleClass) => {

        console.log(singleClass);
        const { classId, image, instructor_name, name, price, _id, available_seats, enrolled_student } = singleClass

        if (user && user?.email) {
            const selectedClass = {
                classId, image, instructor_name, name, price, id: _id, email: user?.email,
                available_seats, enrolled_student
            }
            fetch('https://illusion-school-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch cart to update the number of items in the cart

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} Class is Selected `,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login to select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }





    return (
        <div className='overflow-hidden'>
            <Banner title={'Here is all the class information '} img={'https://embed.lottiefiles.com/animation/70217'}></Banner>

            <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full Blogs  md:px-24 lg:px-8 lg:py-20 '>

                {loading ? <CardLoading></CardLoading> : <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>


                    {
                        allClass.map((SClass, index) => SClass.status === 'approved' && <div data-aos="zoom-in-right" key={index} class={`max-w-lg overflow-hidden   transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl   ${SClass.available_seats === 0 ? 'bg-red-900' : 'bg-slate-900 '}  `}>
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-300 uppercase dark:text-white">{SClass.name}</h1>
                                <p class="mt-1 text-lg text-gray-400 dark:text-gray-400">

                                    <span className='font-semibold'>  Instructor Name</span> : {SClass.instructor_name}

                                </p>
                                <p class="mt-1 text-lg text-gray-400 dark:text-gray-400">

                                    <span className='font-semibold'>  Available Seats</span> : {SClass.available_seats
                                    }

                                </p>
                                <p class="mt-1 text-lg text-gray-400 dark:text-gray-400">

                                    <span className='font-semibold'>  Enrolled Student</span> : {SClass.enrolled_student
                                    }

                                </p>

                            </div>

                            <img class="object-cover w-full h-64 mt-2" src={SClass.image} alt="NIKE AIR" />

                            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                                <h1 class="text-lg font-bold text-slate-300">$ {SClass.price}</h1>
                                <button onClick={() => handleSelect(SClass)}

                                    className={

                                        `px-3 py-1 text-sm  font-semibold text-gray-700  transition-colors duration-300 transform bg-yellow-600 rounded hover:bg-gray-200 focus:outline-none  
                                        
                                       

                                        
                                        ${SClass.available_seats === 0 ? 'bg-amber-900 text-slate-400 btn-disabled' : 'text-gray-700 bg-yellow-600  '}       ${(isAdmin || isInstructor) && ' btn-disabled bg-slate-200'}`}  >Select Class</button>
                            </div>
                        </div>)
                    }




                </div>}



            </div>

        </div>
    );
};

export default AllClass;