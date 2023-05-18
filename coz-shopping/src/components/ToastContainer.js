import styled from 'styled-components';

import Toast from './Toast';
import { TOAST } from '../lib/constants';

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
        item.actionType === TOAST.ALERT_ACTION ? (
          <Toast
            key={item.id}
            id={item.id}
            actionType={item.actionType}
            message={TOAST.ALERT_MESSAGE}
          />
        ) : (
          <Toast
            key={item.id}
            id={item.id}
            actionType={item.actionType}
            message={TOAST.DISMISS_MESSAGE}
          />
        )
      )}
    </Conatiner>
  );
};

export default ToastContainer;
