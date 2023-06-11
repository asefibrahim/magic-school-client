import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['instructor', user?.instructor],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;