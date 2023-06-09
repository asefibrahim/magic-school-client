import React from 'react';
import UpdateClass from './UpdateClass';

const MyClassRow = ({ singleClass }) => {
    const { name, available_seats, price, status, _id } = singleClass



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

                <p className="dark:text-gray-400 ps-2 py-1 rounded-lg bg-pink-200">{status}</p>
            </td>
            <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-400">Tuesday</p>
            </td>
            <td className="p-3">
                <button className='btn btn-xs '>See feedback</button>
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

        </tr>
    );
};

export default MyClassRow;