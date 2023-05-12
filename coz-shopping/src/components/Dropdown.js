import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import icons from '../lib/icons';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.white};
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  position: absolute;
  right: 40px;
  top: 70px;

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
    margin-left: 130px;
  }

  &::after {
    bottom: 100%;
    margin-left: 130px;
    border-bottom-color: #fff;
  }

  & .noDecoration {
    text-decoration: none;
  }
`;

const MenuItem = styled.div`
  width: 200px;
  height: 50px;
  padding: 13px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};

  &.hasLine {
    border-top: 0.5px solid #00000010;
  }
`;

const Dropdown = () => {
  const { datas } = useSelector((state) => state.menu);

  return (
    <Container>
      <MenuItem>OOO님, 안녕하세요!</MenuItem>
      {datas.map((data) => (
        <NavLink key={data.id} to={data.to} className="noDecoration">
          <MenuItem className="hasLine">
            {icons[data.icon]}&nbsp;{data.name}
          </MenuItem>
        </NavLink>
      ))}
    </Container>
  );
};

export default Dropdown;
