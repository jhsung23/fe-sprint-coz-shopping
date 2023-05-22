import styled from 'styled-components';

import { ReactComponent as Error } from '../img/error.svg';
import { FETCH_ERROR_MESSAGE } from '../lib/constants';

const Continaer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.lightgrey};
  text-align: center;
  font-size: 1.1rem;
  line-height: 170%;
  white-space: pre-line;
`;

const FetchError = () => {
  return (
    <Continaer>
      <Error width={350} height={350} />
      <ErrorMessage>{FETCH_ERROR_MESSAGE}</ErrorMessage>
    </Continaer>
  );
};

export default FetchError;
