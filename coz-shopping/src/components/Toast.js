import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import icons from '../lib/icons';
import { dismiss } from '../modules/toast';

const Container = styled.div`
  width: 305px;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  background-color: white;
  z-index: 300;
  pointer-events: auto;
  transition: transform 0.5s ease-in-out;
  animation: open-toast 0.6s;

  &:hover button {
    display: flex;
  }

  @keyframes open-toast {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  &.bookmark {
    color: ${(props) => props.theme.colors.yellow};
  }

  &.unbookmark {
    color: ${(props) => props.theme.colors.grey};
  }
`;

const Message = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid;
  position: absolute;
  right: 17px;
  transform: translate(-5%, -95%);
  border-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.lightgrey};
  font-size: 14px;
  display: none;
`;

const Toast = ({ id, actionType, message }) => {
  const dispatch = useDispatch();

  const removeToast = () => {
    dispatch(dismiss(id));
  };

  return (
    <Container>
      <IconWrapper className={actionType}>{icons.filledStar}</IconWrapper>
      <Message>{message}</Message>
      <CloseButton onClick={removeToast}>{icons.close}</CloseButton>
    </Container>
  );
};

export default Toast;
