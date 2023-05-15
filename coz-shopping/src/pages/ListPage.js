import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

import FilterContainer from '../components/FilterContainer';
import Item from '../components/Item';
import ItemSkeleton from '../components/ItemSkeleton';

const LIMIT = 20;

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
`;

const ListPage = () => {
  const [datas, setDatas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(LIMIT);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [ref, inView] = useInView();

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
      <ItemContainer>
        {isLoading
          ? Array.from({ length: 16 }, () => undefined).map((data, idx) => (
              <ItemSkeleton key={idx} />
            ))
          : datas
              .slice(0, visibleCount)
              .filter((data) => selectedType === '' || data.type === selectedType)
              .map((data) => <Item key={data.id} {...data} />)}
      </ItemContainer>
      <div ref={ref} />
    </Container>
  );
};

export default ListPage;
