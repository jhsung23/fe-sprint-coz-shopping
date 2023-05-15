import styled from 'styled-components';
import { useSelector } from 'react-redux';

import FilterItem from './FilterItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;

  & > :not(:last-child) {
    margin-right: 36px;
  }
`;

const FilterContainer = ({ selectedType, setSelectedType }) => {
  const { items } = useSelector((state) => state.filter);

  return (
    <Container>
      {items.map((item) => (
        <FilterItem
          key={item.id}
          {...item}
          selectedType={item.type === selectedType}
          setSelectedType={setSelectedType}
        />
      ))}
    </Container>
  );
};

export default FilterContainer;
