import styled from 'styled-components';

import Toast from './Toast';

const Conatiner = styled.div`
  width: 353px;
  height: 100vh;
  padding: 12px 24px;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  pointer-events: none;

  & > :not(:last-child) {
    margin-top: 12px;
  }
`;

const ToastContainer = ({ items }) => {
  return (
    <Conatiner>
      {items.map((item) =>
        item.actionType === 'bookmark' ? (
          <Toast
            key={item.id}
            id={item.id}
            actionType={item.actionType}
            message="상품이 북마크에 추가되었습니다."
          />
        ) : (
          <Toast
            key={item.id}
            id={item.id}
            actionType={item.actionType}
            message="상품이 북마크에서 제거되었습니다."
          />
        )
      )}
    </Conatiner>
  );
};

export default ToastContainer;
