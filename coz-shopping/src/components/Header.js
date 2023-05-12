import styled from 'styled-components';

import logo from '../img/logo.png';
import icons from '../lib/icons';

const Container = styled.header`
  width: 100vw;
  height: 80px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 76px;

  & .menu-button {
    width: 50px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 55px;
    height: 30px;
    margin-right: 12px;
  }

  & p {
    font-weight: 700;
    font-size: 32px;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <LogoWrapper>
          <img src={logo} alt="logo" />
          <p>COZ Shopping</p>
        </LogoWrapper>
        {icons.hamburger({ className: 'menu-button' })}
      </Container>
    </>
  );
};

export default Header;
