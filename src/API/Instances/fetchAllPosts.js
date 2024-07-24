import { axiosInstance } from "../ConfigAxios";

export const fetchAllPosts = async () => {
    const response = await axiosInstance.get('/post?limit=50');
    return response.data;
  };