import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import FilterContainer from '../components/FilterContainer';
import Item from '../components/Item';
import ItemSkeleton from '../components/ItemSkeleton';
import EmptyList from '../components/EmptyList';

const LIMIT = 20;
const SKELETON_COUNT = 16;

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
  const [datas, setDatas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(LIMIT);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [ref, inView] = useInView();

  const { itemsId } = useSelector((state) => state.bookmark);

  const fetchInitialData = () => {
    setIsLoading(true);
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products').then((res) => {
      setDatas(res.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    });
  };

  const loadMoreData = useCallback(() => {
    setVisibleCount((prevState) => prevState + LIMIT);
  }, []);

  const updateUI = () => {
    const filteredData =
      title === 'itemList'
        ? datas
            .slice(0, visibleCount)
            .filter((data) => selectedType === '' || data.type === selectedType)
        : datas
            .filter(
              (data) =>
                (selectedType === '' || data.type === selectedType) && itemsId.includes(data.id)
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

    return title === 'itemList' ? (
      <EmptyList listName="item" width={300} height={200} />
    ) : (
      <EmptyList listName="bookmark" width={200} height={200} />
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView, loadMoreData]);

  return (
    <Container>
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
    </Container>
  );
};

export default ListPage;
