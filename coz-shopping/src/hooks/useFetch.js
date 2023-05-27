import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [url]);

  return [isLoading, datas, isError];
};

export default useFetch;
