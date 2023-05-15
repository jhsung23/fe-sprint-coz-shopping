import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Item from './Item';
import ItemSkeleton from './ItemSkeleton';

const MAX_COUNT = 4;

const Container = styled.section`
  height: 320px;
  width: 1128px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const List = styled.div`
  height: 264px;
  display: flex;

  & > :not(:first-child) {
    margin-left: 24px;
  }
`;

const MainList = ({ isLoading, title, datas }) => {
  const { itemsId } = useSelector((state) => state.bookmark);

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {isLoading ? (
          <>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
          </>
        ) : title === '북마크 리스트' ? (
          datas
            .filter((data) => itemsId.includes(data.id))
            .slice(0, MAX_COUNT)
            .map((item) => <Item key={item.id} {...item} />)
        ) : (
          datas.slice(0, MAX_COUNT).map((item) => <Item key={item.id} {...item} />)
        )}
      </List>
    </Container>
  );
};

export default MainList;
