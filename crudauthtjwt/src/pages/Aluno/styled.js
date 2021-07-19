import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;

  input {
    height: 30px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0px 10px;
    font-size: 18px;
  }
`;
export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  margin-top: 20px;

  position: relative;

  img {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    object-fit: cover;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const H1 = styled.h3`
  background: ${colors.primaryColor};
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 5px;
`;
