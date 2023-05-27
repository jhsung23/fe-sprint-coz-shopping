import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MainList from '../components/MainList';
import ToastContainer from '../components/ToastContainer';
import Modal from '../components/Modal';
import FetchError from '../components/FetchError';
import { MAIN_LIST } from '../lib/constants';
import useFetch from '../hooks/useFetch';

const SERVER_URL = 'http://cozshopping.codestates-seb.link/api/v1/products';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  flex-grow: 1;
`;

const MainPage = () => {
  const [isLoading, datas, isError] = useFetch(SERVER_URL);

  const { toast } = useSelector((state) => state);
  const { modal } = useSelector((state) => state);

  return (
    <Container>
      {isError ? (
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
