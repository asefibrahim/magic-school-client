

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useBookingClassCarts = () => {
    const { user, loading } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [classes, refetch]

}
export default useBookingClassCarts;
