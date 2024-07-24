import { axiosInstance } from "../ConfigAxios";

export const fetchCommentsByPost = async ({ idPost }) => {
    const response = await axiosInstance.get(`/post/${idPost}/comment`);
    return response.data.data;
  };