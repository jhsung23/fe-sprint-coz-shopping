import { useCallback, useEffect, useState } from 'react';

const useAxios = (requestCallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    requestCallback()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, datas, isError];
};

export default useAxios;
