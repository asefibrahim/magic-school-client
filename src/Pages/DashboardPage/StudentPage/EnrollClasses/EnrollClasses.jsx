import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const EnrollClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrollClass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    })


    return (
        <div>
            {enrolledClasses.length}
        </div>
    );
};

export default EnrollClasses;