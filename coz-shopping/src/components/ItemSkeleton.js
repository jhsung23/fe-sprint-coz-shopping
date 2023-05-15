import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div`
  height: 264px;
  width: 264px;
`;

const ImageWrapper = styled(Skeleton)`
  width: 264px;
  height: 210px;
  border-radius: 12px;
`;

const TitleWrapper = styled(Skeleton)`
  width: 264px;
  height: 16px;
  border-radius: 12px;
  margin-top: 7px;
`;

const SubtitleWrapper = styled(Skeleton)`
  width: 264px;
  height: 16px;
  border-radius: 12px;
  margin-top: 7px;
`;

const ItemSkeleton = () => {
  return (
    <Container>
      <ImageWrapper width={264} height={210} />
      <TitleWrapper width={264} height={20} />
      <SubtitleWrapper width={264} height={20} />
    </Container>
  );
};

export default ItemSkeleton;
