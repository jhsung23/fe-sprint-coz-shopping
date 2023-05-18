import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import icons from '../lib/icons';
import { open } from '../modules/menu';
import { MENU } from '../lib/constants';

const Container = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.white};
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  position: absolute;
  right: 40px;
  top: 70px;
  z-index: 100;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-width: 18px 8px;
    border-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
  }

  &::before {
    bottom: 100%;
    margin-left: 142px;
  }

  &::after {
    bottom: 100%;
    margin-left: 142px;
    border-bottom-color: #fff;
  }

  & .noDecoration {
    text-decoration: none;
  }
`;

const MenuItem = styled.div`
  width: 200px;
  height: 50px;
  padding: 13px 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};

  &.hasLine {
    border-top: 0.5px solid #00000010;
  }
`;

const Dropdown = ({ menuButtonRef }) => {
  const menuRef = useRef(null);
  const { datas } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const closeMenu = useCallback(
    (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        dispatch(open(false));
      }
    },
    [dispatch, menuButtonRef]
  );

  useEffect(() => {
    document.addEventListener('click', closeMenu, true);
    return () => {
      document.addEventListener('click', closeMenu, true);
    };
  }, [closeMenu]);

  return (
    <Container ref={menuRef}>
      <MenuItem>{MENU.GREETING}</MenuItem>
      {datas.map((data) => (
        <NavLink
          key={data.id}
          to={data.to}
          className="noDecoration"
          onClick={() => {
            dispatch(open(false));
          }}
        >
          <MenuItem className="hasLine">
            {icons[data.icon]}&nbsp;{data.name}
          </MenuItem>
        </NavLink>
      ))}
    </Container>
  );
};

export default Dropdown;
