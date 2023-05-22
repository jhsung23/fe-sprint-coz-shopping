import styled from 'styled-components';

import { ReactComponent as Nothing } from '../img/notFound.svg';
import { NOT_FOUND_MESSAGE } from '../lib/constants';

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: ${(props) => props.theme.colors.lightgrey};
    font-size: 1.2rem;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Nothing width="500px" />
      <p>{NOT_FOUND_MESSAGE}</p>
    </Container>
  );
};

export default NotFound;
