import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

import MainList from '../components/MainList';
import ToastContainer from '../components/ToastContainer';
import Modal from '../components/Modal';
import FetchError from '../components/FetchError';
import { MAIN_LIST } from '../lib/constants';

const SERVER_URL = 'http://cozshopping.codestates-seb.link/api/v1/products';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  flex-grow: 1;
`;

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(false);

  const { toast } = useSelector((state) => state);
  const { modal } = useSelector((state) => state);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(SERVER_URL)
      .then((res) => {
        setDatas(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  return (
    <Container>
      {error ? (
        <FetchError />
      ) : (
        <>
          <MainList isLoading={isLoading} title={MAIN_LIST.ITEM} datas={datas} />
          <MainList isLoading={isLoading} title={MAIN_LIST.BOOKMARK} datas={datas} />
          {toast.items && <ToastContainer items={toast.items} />}
          {modal.isOpen && <Modal {...modal.content} />}
        </>
      )}
    </Container>
  );
};

export default MainPage;
