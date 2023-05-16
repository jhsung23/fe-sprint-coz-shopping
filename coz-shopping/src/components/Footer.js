import styled from 'styled-components';

const Container = styled.footer`
  width: 100vw;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid;
  border-color: #00000010;
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightgrey};
  margin-top: auto;

  & :first-child {
    margin-bottom: 2px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <span>개인정보 처리방침 │ 이용 약관</span>
      <span>All rights reserved @ Codestates</span>
    </Container>
  );
};

export default Footer;
