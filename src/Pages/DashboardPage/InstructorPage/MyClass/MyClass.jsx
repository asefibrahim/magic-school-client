import React from 'react';
import useInstructorClass from '../../../../Hooks/useInstructorClass';
import MyClassRow from './MyClassRow';

const MyClass = () => {

    const [refetch, instructorClasses] = useInstructorClass()
    console.log(instructorClasses);
    return (
        <div>

            <div className="container bg-stone-50  p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-8 text-2xl font-semibold leading-tight">My Added Classes : {instructorClasses.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Class Name</th>
                                <th className="p-3">Available Seats</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Total Enrolment</th>


                                <th className="p-3">Feedback</th>
                                <th className="p-3">Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructorClasses.map(singleClass => {
                                    return <>
                                        <MyClassRow key={singleClass._id} singleClass={singleClass}
                                            refetch={refetch}
                                        ></MyClassRow>
                                        {/* <UpdateClass singleClass={singleClass}></UpdateClass> */}
                                    </>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>




        </div>
    );
};

export default MyClass;