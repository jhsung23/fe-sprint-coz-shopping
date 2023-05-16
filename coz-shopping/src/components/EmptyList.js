import styled from 'styled-components';

import { ReactComponent as EmptyItemListSvg } from '../img/emptyItemList.svg';
import { ReactComponent as EmptyBookmarkListSvg } from '../img/emptyBookmarkList.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;

  &.background {
    height: 264px;
    background-color: #00000009;
    border-radius: 10px;
  }

  & p {
    color: ${(props) => props.theme.colors.lightgrey};
    font-size: 1.1rem;
    margin-top: 20px;
  }
`;

const EmptyList = ({ listName, width, height, background }) => {
  return (
    <Container className={background ? 'background' : ''}>
      {listName === 'item' ? (
        <>
          <EmptyItemListSvg width={width} height={height} />
          <p>끙차! 상품 준비중입니다.</p>
        </>
      ) : (
        <>
          <EmptyBookmarkListSvg width={width} height={height} />
          <p>이런! 북마크한 아이템이 없네요.</p>
        </>
      )}
    </Container>
  );
};

export default EmptyList;
