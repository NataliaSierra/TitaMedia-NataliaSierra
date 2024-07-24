import { useEffect, useState } from 'react';
import { fetchCommentsByPost } from '../API/Instances/fetchCommentsByPost';

const UseGetCommet = ({ idPost }) => {
  const [commentsByPost, setCommentsByPost] = useState([]);

  const getCommetsByposts = async ({ idPost: idPost }) => {
    try {
      const response = await fetchCommentsByPost({ idPost: idPost });
      setCommentsByPost(() => response);
    } catch (error) {
      setCommentsByPost([]);
    }
  };

  useEffect(() => {
    getCommetsByposts({ idPost });
  }, []);

  return { commentsByPost, getCommetsByposts };
};

export default UseGetCommet;

