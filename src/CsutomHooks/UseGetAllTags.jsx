import { useEffect, useState } from "react";
import { fetchAllTags } from "../API/Instances/fetchAllTags";


const UseGetAllTags = () => {
    const [tags, setTags] = useState([]);
  
    const getAllTags = async () => {
      try {
        const response = await fetchAllTags();
        setTags(() => response);
      } catch (error) {
        setTags([]);
      }
    };
  
    useEffect(() => {
        getAllTags();
    }, []);
  
    return tags;
  };
  
  export default UseGetAllTags;
  