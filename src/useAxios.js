import { useState, useEffect, useRef } from "react";
import axios from 'axios';


export const useAxios = (url, options={}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios(url, options);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [url, options]);
  
    return { data, error, isLoading };
  }
