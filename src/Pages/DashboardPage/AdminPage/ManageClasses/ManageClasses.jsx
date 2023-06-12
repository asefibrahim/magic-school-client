import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes')
            return res.data
        }
    })
    console.log(allClasses);

    const handleMakeApproved = (single) => {
        Swal.fire({
            title: 'Are you for approving the call',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://illusion-school-server.vercel.app/classes/${single._id}`, {
                    method: 'PATCH'
                }).then(res => res.json()).then(data => {
                    console.log(data);
                    refetch()
                })
            }
        })
    }
    const handleMakeDenied = (single) => {
        Swal.fire({
            title: 'Are you for Denying the class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://illusion-school-server.vercel.app/classes/denied/${single._id}`, {
                    method: 'PATCH'
                }).then(res => res.json()).then(data => {
                    console.log(data);
                    refetch()
                })
            }
        })
    }
    const handleFeedback = async (single) => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Send Feedback',
            inputPlaceholder: 'Type your Feedback here...',
            inputAttributes: {
                'aria-label': 'Type your Feedback here'
            },
            showCancelButton: true
        })

        if (text) {
            Swal.fire(text)
            const feedback = { text }
            fetch(`https://illusion-school-server.vercel.app/classes/feedback/${single._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(feedback)
            }).then(res => res.json()).then(data => {
                console.log(data);

            })
        }
    }


    return (
        <div>
            <div className='grid grid-cols-1  px-6 gap-6 mt-12'>


                {
                    allClasses.map(single => <article class="flex bg-stone-50 transition hover:shadow-xl shadow-lg">
                        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span>2022</span>
                                <span class="w-px flex-1 bg-gray-900/10"></span>
                                <span>Oct 10</span>
                            </time>
                        </div>

                        <div class="hidden sm:block sm:basis-56">
                            <img
                                alt="Guitar"
                                src={single.image}
                                class="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">

                                <h3 class="font-bold  text-gray-900 text-xl">
                                    Class Name : {single.name}
                                </h3>
                                <h3 class="font-medium  text-gray-700 text-sm mt-2">
                                    Instructor Name : {single.instructor_name}
                                </h3>
                                <h3 class="font-medium  text-gray-700 text-sm mt-2">
                                    Instructor Email : {single.email}
                                </h3>
                                <h3 class="font-medium  text-gray-700 text-sm mt-2">
                                    Available Seats   :    {single.available_seats}
                                </h3>








                                <p class={`mt-3 line-clamp-3 text-sm inline-flex items-center   rounded-full gap-x-2  dark:bg-gray-800  uppercase  w-28 ps-5  py-2 ${single.status === 'approved' ? 'text-emerald-500  bg-emerald-100/60 ' : 'bg-purple-200' && single.status === 'denied' ? 'bg-red-100/60  text-red-500' : ' text-indigo-500 bg-indigo-100/60'}`}>
                                    {single?.status}
                                </p>
                            </div>

                            <div class="sm:flex gap-3 sm:items-end sm:justify-end">
                                <button onClick={() => handleMakeApproved(single)}
                                    disabled={single.status === 'approved' || single.status === 'denied'}
                                    class="block bg-green-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Approve
                                </button>
                                <button onClick={() => handleMakeDenied(single)}

                                    disabled={single.status === 'approved' || single.status === 'denied'}
                                    class="block bg-red-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Deny
                                </button>
                                <button onClick={() => handleFeedback(single)}

                                    class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Send Feedback
                                </button>
                            </div>
                        </div>
                    </article>)
                }


            </div>
        </div>
    );
};

export default ManageClasses;