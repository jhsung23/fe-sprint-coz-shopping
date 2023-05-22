import styled from 'styled-components';
import { FOOTER } from '../lib/constants';

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
      <span>
        {FOOTER.PRIVACY_POLICY} │ {FOOTER.TERMS_AND_CONDITIONS}
      </span>
      <span>{FOOTER.COPYRIGHT}</span>
    </Container>
  );
};

export default Footer;
