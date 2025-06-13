import axiosInstance from '../api/axiosInstance';

export const productLoader = async ({ params }) => {
  const { id } = params;
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data;
};
