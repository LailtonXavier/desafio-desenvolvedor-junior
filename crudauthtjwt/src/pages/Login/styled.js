import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 35px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  button {
    box-shadow: 0 9px #999;
  }

  button:hover {
    filter: brightness(75%);
  }
  button:active {
    background-color: ${colors.primaryColor};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
