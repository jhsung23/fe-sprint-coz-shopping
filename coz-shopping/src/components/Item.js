import { useState } from 'react';
import styled from 'styled-components';

import icons from '../lib/icons';
import Modal from './Modal';

const Container = styled.div`
  height: 264px;
  width: 264px;
`;

const ImageWrapper = styled.div`
  width: 264px;
  height: 210px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StarButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: ${(props) =>
    props.bookmarked === 'true' ? props.theme.colors.yellow : props.theme.colors.grey};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-weight: 800;
  font-size: 16px;

  & :nth-child(2) {
    color: ${(props) => (props.type === 'Product' ? props.theme.colors.purple : 'black')};
  }
`;

const SubtitleWrapper = styled.div`
  margin-top: 3px;
  font-size: 16px;
  font-weight: 400;
  text-align: ${(props) => (props.type === 'Exhibition' ? 'start' : 'end')};
`;

const Item = ({
  type,
  title,
  sub_title,
  brand_name,
  price,
  discountPercentage,
  image_url,
  brand_image_url,
  follower,
}) => {
  let titleLeft = title || brand_name;
  let titleRight = '';
  let subtitle = '';
  let imageUrl = image_url;

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (type === 'Product') {
    titleRight = `${discountPercentage}%`;
    subtitle = Number(price).toLocaleString('ko-KR', { currency: 'KRW' }) + '원';
  } else if (type === 'Exhibition') {
    subtitle = sub_title;
  } else if (type === 'Brand') {
    titleRight = '관심고객수';
    subtitle = Number(follower).toLocaleString('ko-KR', { currency: 'KRW' });
    imageUrl = brand_image_url;
  }

  return (
    <>
      <Container
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <ImageWrapper>
          <img src={imageUrl} alt="img" />
          {/* TODO : 북마크 기능 */}
          <StarButton bookmarked="true">{icons.filledStar}</StarButton>
        </ImageWrapper>
        <TitleWrapper type={type}>
          <p>
            {type === 'Category' && '# '}
            {titleLeft}
          </p>
          <p>{titleRight}</p>
        </TitleWrapper>
        <SubtitleWrapper type={type}>{subtitle}</SubtitleWrapper>
      </Container>
      {isModalOpen ? (
        <Modal titleLeft={titleLeft} imageUrl={imageUrl} setIsModalOpen={setIsModalOpen} />
      ) : undefined}
    </>
  );
};

export default Item;
