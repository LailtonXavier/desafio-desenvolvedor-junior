import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  color: black;

  display: flex;
  justify-content: center;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    height: 30px;
    font-size: 18px;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    /* &:focus {
      border: 1px solid ${colors.primaryColor};
    } */
  }
`;
