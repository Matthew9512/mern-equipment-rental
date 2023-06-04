import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = `http://localhost:8000`;
axios.defaults.timeout = `5000`;

export const useAxios = () => {
   const [data, setData] = useState();
   const [ready, setReady] = useState(false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const navigate = useNavigate();

   const fetchData = async (options) => {
      try {
         setLoading(true);
         const res = await axios.request(options);
         setReady(true);
         setData(res.data);
         console.log(res.data);
      } catch (error) {
         console.log(error);
         if (error.request.status === 0) return navigate('/server-down');
         setError(error.response.data.message);
      }
   };

   return { fetchData, data, ready, loading, error };
};
