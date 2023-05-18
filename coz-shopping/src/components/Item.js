import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import icons from '../lib/icons';
import { toggle } from '../modules/bookmark';
import { alertAsync } from '../modules/toast';
import { open } from '../modules/modal';
import { BRAND, CATEGORY, ITEM_TYPE, TOAST } from '../lib/constants';

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
  cursor: pointer;

  & :nth-child(2) {
    color: ${(props) => (props.type === ITEM_TYPE.PRODUCT ? props.theme.colors.purple : 'black')};
  }
`;

const SubtitleWrapper = styled.div`
  margin-top: 3px;
  font-size: 16px;
  font-weight: 400;
  text-align: ${(props) => (props.type === ITEM_TYPE.EXHIBITION ? 'start' : 'end')};
  cursor: pointer;
`;

const Item = ({
  id,
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
  const titleLeft = title || brand_name;
  let titleRight = '';
  let subtitle = '';
  let imageUrl = image_url;

  const { itemsId } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const toggleBookmark = () => {
    dispatch(toggle(id));

    if (itemsId.includes(id)) {
      alertAsync(uuid(), TOAST.DISMISS_ACTION)(dispatch);
    } else {
      alertAsync(uuid(), TOAST.ALERT_ACTION)(dispatch);
    }
  };

  if (type === ITEM_TYPE.PRODUCT) {
    titleRight = `${discountPercentage}%`;
    subtitle = Number(price).toLocaleString('ko-KR', { currency: 'KRW' }) + '원';
  } else if (type === ITEM_TYPE.EXHIBITION) {
    subtitle = sub_title;
  } else if (type === ITEM_TYPE.BRAND) {
    titleRight = BRAND.TITLE_RIGHT;
    subtitle = Number(follower).toLocaleString('ko-KR', { currency: 'KRW' });
    imageUrl = brand_image_url;
  }

  return (
    <>
      <Container>
        <ImageWrapper>
          <img
            src={imageUrl}
            alt="img"
            onClick={() => {
              dispatch(open(id, titleLeft, imageUrl));
            }}
          />
          <StarButton bookmarked={itemsId.includes(id) ? 'true' : 'false'} onClick={toggleBookmark}>
            {icons.filledStar}
          </StarButton>
        </ImageWrapper>
        <div
          onClick={() => {
            dispatch(open(id, titleLeft, imageUrl));
          }}
        >
          <TitleWrapper type={type}>
            <p>
              {type === ITEM_TYPE.CATEGORY && CATEGORY.PREFIX}
              {titleLeft}
            </p>
            <p>{titleRight}</p>
          </TitleWrapper>
          <SubtitleWrapper type={type}>{subtitle}</SubtitleWrapper>
        </div>
      </Container>
    </>
  );
};

export default Item;
