import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = () => {
      axios
        .get(url, { cancelToken: source.token })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log('useFetch => canceled request');
          } else {
          	setError(err.message); // Set error state with error message
          	setIsLoading(false);
          }
          return err.message;
        });
    };

    fetchData();
    return () => source.cancel();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
