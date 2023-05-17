import styled from 'styled-components';

import { ReactComponent as Nothing } from '../img/notFound.svg';

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
      <p>존재하지 않는 페이지입니다.</p>
    </Container>
  );
};

export default NotFound;
