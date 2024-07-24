import { axiosInstance } from "../ConfigAxios";

export const fetchAllTags = async () => {
    const response = await axiosInstance.get('/tag');
    return response;
  };