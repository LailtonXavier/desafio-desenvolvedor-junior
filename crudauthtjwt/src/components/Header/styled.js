import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  color: white;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }

  img {
    max-width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const CarShop = styled.div`
  cursor: pointer;
  position: absolute;
  right: 25px;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &:hover {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 300px;
    width: 200px;
    background: black;
    color: white;
  }
`;
