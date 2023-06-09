import React, { useContext } from 'react';

import { AuthContext } from '../../../../Providers/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    console.log(user?.displayName
    );
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const className = form.className.value
        const InstructorName = user?.displayName

        const availableSeats = form.availableSeats.value
        const price = form.price.value
        const image = form.image.value
        const classId = form.classId.value
        const classInfo = {
            name: className,
            image: image,
            available_seats: parseFloat(availableSeats),
            email: user?.email,
            instructor_name: InstructorName,
            price: parseFloat(price),
            classId: parseFloat(classId),
            status: 'pending'
        }
        console.log(classInfo);
        axiosSecure.post('/classes', classInfo)
            .then(data => {
                console.log(data.data);
            })

    }
    return (
        <div>
            <div className="w-full px-10">

                <form onSubmit={handleSubmit} >
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class  Name*</span>
                        </label>
                        <input type="text"

                            className="input input-bordered w-full " name='className' />
                    </div>
                    <div className="flex my-4">
                        <div className=" w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor  Name*</span>
                            </label>
                            <input type="text"

                                className="input input-bordered w-full " value={user?.displayName} readOnly />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " value={user?.email} />
                        </div>
                    </div>
                    <div className="flex my-4">
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats*</span>
                            </label>
                            <input type="number" placeholder="Recipe Name"

                                className="input input-bordered w-full " name='availableSeats' />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full " name='price' />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Class ID (Between 1-9)*</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full " name='classId' />
                        </div>
                    </div>
                    <div className="flex my-4">
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text font-semibold">Class  Image*</span>
                            </label>
                            <input type="text" className="file-input file-input-bordered w-full px-4" placeholder="Image URL" name='image' />
                        </div>

                    </div>


                    <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;