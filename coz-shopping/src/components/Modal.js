import { useRef } from 'react';
import styled from 'styled-components';

import icons from '../lib/icons';

const ModalLayer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff40;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const Container = styled.div`
  width: 744px;
  height: 480px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));
  overflow: hidden;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 32px;
  color: white;
`;

const BottomContentWrapper = styled.div`
  position: absolute;
  bottom: 27px;
  left: 0;
  right: 0;
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const StarButton = styled.button`
  height: 24px;
  font-size: 24px;
  margin-left: 24px;
  color: ${(props) =>
    props.bookmarked === 'true' ? props.theme.colors.yellow : props.theme.colors.grey};
`;

const Title = styled.span`
  font-weight: 900;
  margin-left: 8px;
  color: white;
  line-height: 1.5px;
`;

const Modal = ({ titleLeft, imageUrl, setIsModalOpen }) => {
  const layerRef = useRef(null);

  const closeModal = (e) => {
    if (e.target === layerRef.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <ModalLayer ref={layerRef} onClick={closeModal}>
      <Container>
        <ItemImage src={imageUrl} alt={titleLeft} />
        <CloseButton
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          {icons.close}
        </CloseButton>
        <BottomContentWrapper>
          {/* TODO : 북마크 기능 */}
          <StarButton bookmarked="false">{icons.filledStar}</StarButton>
          <Title>{titleLeft}</Title>
        </BottomContentWrapper>
      </Container>
    </ModalLayer>
  );
};

export default Modal;
