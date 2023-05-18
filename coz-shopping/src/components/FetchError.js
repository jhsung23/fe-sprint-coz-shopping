import styled from 'styled-components';

import { ReactComponent as Error } from '../img/error.svg';

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
`;

const FetchError = () => {
  return (
    <Continaer>
      <Error width={350} height={350} />
      <ErrorMessage>
        이런! 페이지를 불러올 수 없습니다.
        <br />
        잠시 후에 다시 시도해 주세요.
      </ErrorMessage>
    </Continaer>
  );
};

export default FetchError;
