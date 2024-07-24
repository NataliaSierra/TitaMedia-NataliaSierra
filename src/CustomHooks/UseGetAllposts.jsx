import { useEffect, useState } from "react";
import { fetchAllPosts } from "../API/Instances/fetchAllPosts";


const UseGetAllposts = () => {
    const [posts, setPosts] = useState([]);
  
    const UseGetAllposts = async () => {
      try {
        const response = await fetchAllPosts();
        setPosts(() => response);
      } catch (error) {
        setPosts([]);
      }
    };
  
    useEffect(() => {
        UseGetAllposts();
    }, []);
  
    return posts;
  };
  
  export default UseGetAllposts;
  