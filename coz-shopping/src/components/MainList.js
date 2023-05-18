import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Item from './Item';
import ItemSkeleton from './ItemSkeleton';
import EmptyList from './EmptyList';
import { MAIN_LIST } from '../lib/constants';

const MAX_COUNT = 4;
const SKELETON_COUNT = 4;

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

  const updateUI = () => {
    const filteredData =
      title === MAIN_LIST.BOOKMARK
        ? datas.filter((data) => itemsId.includes(data.id)).slice(0, MAX_COUNT)
        : datas.slice(0, MAX_COUNT);

    if (filteredData.length) {
      return (
        <List>
          {filteredData.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </List>
      );
    }

    return title === MAIN_LIST.BOOKMARK ? (
      <EmptyList listName={MAIN_LIST.BOOKMARK} width={140} height={120} background />
    ) : (
      <EmptyList listName={MAIN_LIST.ITEM} width={190} height={110} background />
    );
  };

  return (
    <Container>
      <Title>{title}</Title>
      {isLoading ? (
        <List>
          {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
            <ItemSkeleton key={idx} />
          ))}
        </List>
      ) : (
        updateUI()
      )}
    </Container>
  );
};

export default MainList;
