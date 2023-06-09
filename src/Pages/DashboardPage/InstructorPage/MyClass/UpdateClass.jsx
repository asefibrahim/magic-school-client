import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useInstructorClass from '../../../../Hooks/useInstructorClass';
import Swal from 'sweetalert2';

const UpdateClass = ({ singleClass }) => {
    const { name, available_seats, price, status, _id } = singleClass
    const [axiosSecure] = useAxiosSecure()
    const [refetch,] = useInstructorClass()
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = parseFloat(form.price.value)
        const available_seats = parseFloat(form.quantity.value)

        const updateInfo = {
            name, price, available_seats,
        }
        console.log(updateInfo);

        axiosSecure.put(`http://localhost:5000/classes/${_id}`, updateInfo)
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({

                        title: 'Success!',
                        text: 'Toy information Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }


    return (
        <div className="modal" id="my-modal-2">
            <div className="modal-box bg-stone-200">


                <form onSubmit={handleUpdate} class="space-y-4 ">
                    <div>
                        <label for="name">Class  Name</label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"

                            type="text"
                            defaultValue={name}

                            name='name'
                        />
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label  >Price</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"

                                type="number"
                                name='price'
                                defaultValue={price}

                            />
                        </div>

                        <div>
                            <label for="phone">Available Seats</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"

                                type='number'
                                name='quantity'
                                defaultValue={available_seats} />
                        </div>
                    </div>





                    <div class="mt-4">
                        <button type='submit'

                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Update
                        </button>
                    </div>
                </form>
                <div className="modal-action">
                    <a href="#" className="btn">Cancel</a>
                </div>

            </div>
        </div>
    );
};

export default UpdateClass;