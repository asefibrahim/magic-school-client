import React from 'react';
import UpdateClass from './UpdateClass';
import Swal from 'sweetalert2';

const MyClassRow = ({ singleClass, refetch }) => {
    const { name, available_seats, price, status, _id, feedback, enrolled_student } = singleClass

    const handleSeeFeedback = (feedback) => {
        Swal.fire(feedback)
    }

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure to delete this class?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://illusion-school-server.vercel.app/classes/instructorClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
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
        <tr className="border-b border-opacity-20 dark:border-gray-700 text-xs dark:bg-gray-900">
            <td className="p-3 font-semibold">
                <p>{name}</p>
            </td>
            <td className="p-3">
                <p>{available_seats}</p>
            </td>
            <td className="p-3">
                <p>{price}</p>

            </td>
            <td className="p-3">

                <p className={`dark:text-gray-400 ps-3  w-20 py-1 rounded-lg  ${status === 'approved' ? 'bg-green-200' : 'bg-pink-200'}`}>{status}</p>
            </td>
            <td className="p-3">
                {enrolled_student}
            </td>
            <td className="p-3">
                <button onClick={() => handleSeeFeedback(feedback)} className='btn btn-xs '>See feedback</button>
            </td>
            <td className="p-3">



                <a

                    href="#my-modal-2" class="text-gray-500   transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </a>

                <UpdateClass singleClass={singleClass}></UpdateClass>



            </td>
            <td>
                <button onClick={() => handleDeleteItem(_id)} class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </td>

        </tr>
    );
};

export default MyClassRow;