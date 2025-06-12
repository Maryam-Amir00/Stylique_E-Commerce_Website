import axiosInstance from '../api/axiosInstance';

export const shopLoader = () => {
    return axiosInstance.get('/products')
        .then(res => res.data)
        .catch( () => {
            throw new Error('Failed to load Products');
        });
};