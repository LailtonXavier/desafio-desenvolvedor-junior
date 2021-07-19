import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  color: #404040;
  font-weight: bold;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  margin: 5px;

  div {
    margin: 5px;
  }

  span {
    margin: 5px;
  }
`;

export const Names = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;

  margin: 3px 0 3px 8px;
  border-bottom: 1.5px solid red;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;

  img {
    /* width: 35vw;
    height: 40vh; */
    border: 1px solid black;
    margin: 5px;
    background-size: 100%;
    background-repeat: no-repeat;

    border-radius: 15px 20px 5px;

    width: 100%;
    object-fit: cover;
    /* object-position: 0%; */
  }
  width: 300px;
  height: 200px;
`;

export const NovoAluno = styled(Link)`
  border-radius: 25px;

  font-weight: 606px;
  padding: 10px 20px;
  background: ${colors.primaryColor};
  color: white;
  transition: all 0.5s;

  &:hover {
    background: white;
    color: ${colors.primaryColor};
  }
`;
