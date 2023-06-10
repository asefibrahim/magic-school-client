import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';

const EnrollClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrollClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })


    return (
        <div >

            <h1 className='text-4xl font-medium text-center mt-12'>My Successfully Enrolled Class </h1>
            <div className='grid md:grid-cols-3 gap-8 px-5 pt-12'>

                {
                    enrolledClasses.map(singleClass => <article key={singleClass._id}
                        class="group">
                        <img
                            alt="Lava"
                            src={singleClass.
                                itemImage}
                            class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                        />

                        <div class="p-4">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Class Name : {singleClass.
                                        itemName
                                    }
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Instructor Name : {singleClass.
                                    instructor_name
                                }
                            </p>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Enrolment Date  : {singleClass.date
                                }
                            </p>
                        </div>
                    </article>)
                }
            </div>
        </div>
    );
};

export default EnrollClasses;