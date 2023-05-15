import styled from 'styled-components';

const Container = styled.button`
  width: 82px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5px solid;
  border-color: ${(props) => props.theme.colors.lightgrey};
`;

const Image = styled.img`
  object-fit: cover;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-top: 6.5px;
`;

const Tag = styled.span`
  font-size: 16px;

  &.selected {
    color: ${(props) => props.theme.colors.purple};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2.5px;
  }
`;

const FilterItem = ({ id, tag, image, type, selectedType, setSelectedType }) => {
  const imagePath = process.env.PUBLIC_URL + `/img/${image}`;

  return (
    <Container onClick={() => setSelectedType(type)}>
      <ImageWrapper>
        <Image src={imagePath} />
      </ImageWrapper>
      <TagWrapper>
        <Tag className={selectedType && 'selected'}>{tag}</Tag>
      </TagWrapper>
    </Container>
  );
};

export default FilterItem;
