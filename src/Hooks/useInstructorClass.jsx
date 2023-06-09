import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorClass = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: instructorClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?email=${user?.email}`)

            return res.data
        }

    })
    return [refetch, instructorClasses,]
};

export default useInstructorClass;