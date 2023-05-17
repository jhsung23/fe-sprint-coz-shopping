import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

import MainList from '../components/MainList';
import ToastContainer from '../components/ToastContainer';
import Modal from '../components/Modal';

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

  const { items } = useSelector((state) => state.toast);
  const { modal } = useSelector((state) => state);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products').then((res) => {
      setDatas(res.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    });
  }, []);

  return (
    <Container>
      <MainList isLoading={isLoading} title="상품 리스트" datas={datas} />
      <MainList isLoading={isLoading} title="북마크 리스트" datas={datas} />
      {items && <ToastContainer items={items} />}
      {modal.isOpen && <Modal {...modal.content} />}
    </Container>
  );
};

export default MainPage;
