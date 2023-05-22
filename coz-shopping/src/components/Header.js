import { useRef } from 'react';
import styled from 'styled-components';

import logo from '../img/logo.png';
import icons from '../lib/icons';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import { open } from '../modules/menu';
import { NavLink } from 'react-router-dom';
import { APP_NAME, PATH } from '../lib/constants';

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
  const { menu } = useSelector((state) => state);

  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(open(!menu.isOpen));
  };

  return (
    <>
      <Container>
        <NavLink to={PATH.MAIN_PAGE} className="noDecoration">
          <LogoWrapper>
            <img src={logo} alt="logo" />
            <p>{APP_NAME}</p>
          </LogoWrapper>
        </NavLink>
        <IconWrapper className="menu-button" onClick={openMenu} ref={menuButtonRef}>
          {icons.hamburger()}
        </IconWrapper>
      </Container>
      {menu.isOpen && <Dropdown menuButtonRef={menuButtonRef} />}
    </>
  );
};

export default Header;
