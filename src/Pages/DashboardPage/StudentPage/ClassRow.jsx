import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassRow = ({ singleClass, refetch }) => {
    console.log(singleClass);
    const { _id, name, instructor_name, image, price, available_seats

    } = singleClass
    const handleDeleteItem = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (

        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">


                    <div class="flex items-center gap-x-4">
                        <img class="object-cover w-12 h-12 rounded-full" src={image} alt="" />
                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white "></h2>

                        </div>
                    </div>
                </div>
            </td>
            <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">

                    <h2 class="text-sm font-normal ">{name} </h2>
                </div>
            </td>


            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-semibold"> $ {price}</td>
            <td class="px-4 py-4 text-sm   text-gray-500 dark:text-gray-300 whitespace-nowrap">{available_seats} </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-2 ">

                    <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 ">
                        <div class=" w-[100px] text-white flex items-center gap-3"> <p className='font-semibold text-black '>
                            {instructor_name}
                        </p></div>
                    </p>
                </div>
            </td >
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-6">
                    <button onClick={() => handleDeleteItem(_id)} class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>








                </div>

            </td>
            <td>

                <div>
                    <Link
                        class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        to={`payment/${_id}`}
                    >
                        <span class="absolute -start-full transition-all group-hover:start-4">
                            <svg
                                class="h-5 w-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>

                        <span class="text-lg font-medium transition-all group-hover:ms-4">
                            Pay
                        </span>
                    </Link>

                </div>
            </td>
        </tr >
    );
};

export default ClassRow;