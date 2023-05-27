import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import FilterContainer from '../components/FilterContainer';
import Item from '../components/Item';
import ItemSkeleton from '../components/ItemSkeleton';
import EmptyList from '../components/EmptyList';
import ToastContainer from '../components/ToastContainer';
import Modal from '../components/Modal';
import FetchError from '../components/FetchError';
import { MAIN_LIST, MENU } from '../lib/constants';
import useFetch from '../hooks/useFetch';

const LIMIT = 20;
const SKELETON_COUNT = 16;
const SERVER_URL = 'http://cozshopping.codestates-seb.link/api/v1/products';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemContainer = styled.div`
  width: 1128px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 12px;
  margin-bottom: 200px;
`;

const ListPage = ({ title }) => {
  const [visibleCount, setVisibleCount] = useState(LIMIT);
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, datas, isError] = useFetch(() => axios.get(SERVER_URL));

  const [ref, inView] = useInView();

  const { bookmark } = useSelector((state) => state);
  const { toast } = useSelector((state) => state);
  const { modal } = useSelector((state) => state);

  const loadMoreData = useCallback(() => {
    setVisibleCount((prevState) => prevState + LIMIT);
  }, []);

  const updateUI = () => {
    const filteredData =
      title === MENU.ITEM_PAGE
        ? datas
            .slice(0, visibleCount)
            .filter((data) => selectedType === '' || data.type === selectedType)
        : datas
            .filter(
              (data) =>
                (selectedType === '' || data.type === selectedType) &&
                bookmark.itemsId.includes(data.id)
            )
            .slice(0, visibleCount);

    if (filteredData.length) {
      return (
        <ItemContainer>
          {filteredData.map((data) => (
            <Item key={data.id} {...data} />
          ))}
        </ItemContainer>
      );
    }

    return title === MENU.ITEM_PAGE ? (
      <EmptyList listName={MAIN_LIST.ITEM} width={300} height={200} />
    ) : (
      <EmptyList listName={MAIN_LIST.BOOKMARK} width={200} height={200} />
    );
  };

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView, loadMoreData]);

  return (
    <Container>
      {isError ? (
        <FetchError />
      ) : (
        <>
          <FilterContainer selectedType={selectedType} setSelectedType={setSelectedType} />
          {isLoading ? (
            <ItemContainer>
              {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                <ItemSkeleton key={idx} />
              ))}
            </ItemContainer>
          ) : (
            updateUI()
          )}
          <div ref={ref} />
          {toast.items && <ToastContainer items={toast.items} />}
          {modal.isOpen && <Modal {...modal.content} />}
        </>
      )}
    </Container>
  );
};

export default ListPage;
