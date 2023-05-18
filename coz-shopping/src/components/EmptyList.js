import styled from 'styled-components';

import { ReactComponent as EmptyItemListSvg } from '../img/emptyItemList.svg';
import { ReactComponent as EmptyBookmarkListSvg } from '../img/emptyBookmarkList.svg';
import { EMPTY_LIST_MESSAGE, MAIN_LIST } from '../lib/constants';

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
      {listName === MAIN_LIST.ITEM ? (
        <>
          <EmptyItemListSvg width={width} height={height} />
          <p>{EMPTY_LIST_MESSAGE.ITEM}</p>
        </>
      ) : (
        <>
          <EmptyBookmarkListSvg width={width} height={height} />
          <p>{EMPTY_LIST_MESSAGE.BOOKMARK}</p>
        </>
      )}
    </Container>
  );
};

export default EmptyList;
