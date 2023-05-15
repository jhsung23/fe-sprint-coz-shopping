import { useRef } from 'react';
import styled from 'styled-components';

import logo from '../img/logo.png';
import icons from '../lib/icons';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import { open } from '../modules/menu';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  width: 100vw;
  min-height: 80px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 76px;

  & .noDecoration {
    text-decoration: none;
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
    color: black;
    font-weight: 700;
    font-size: 32px;
    text-decoration: none;
  }
`;

const IconWrapper = styled.span`
  z-index: 101;
  font-size: 1.7rem;
  cursor: pointer;
  line-height: 50%;
`;

const Header = () => {
  const menuButtonRef = useRef(null);
  const { isOpen } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(open(!isOpen));
  };

  return (
    <>
      <Container>
        <NavLink to="/" className="noDecoration">
          <LogoWrapper>
            <img src={logo} alt="logo" />
            <p>COZ Shopping</p>
          </LogoWrapper>
        </NavLink>
        <IconWrapper className="menu-button" onClick={openMenu} ref={menuButtonRef}>
          {icons.hamburger()}
        </IconWrapper>
      </Container>
      {isOpen ? <Dropdown menuButtonRef={menuButtonRef} /> : undefined}
    </>
  );
};

export default Header;
