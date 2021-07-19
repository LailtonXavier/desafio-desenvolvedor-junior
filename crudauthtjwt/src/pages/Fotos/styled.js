import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  color: black;
`;

export const Form = styled.form`
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 180px;
    height: 180px;
    background: #ccc;
    border: 2px dashed ${colors.primaryColor};
    border-radius: 50%;
    margin: 20px auto;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
  }
  input {
    display: none;
  }
`;
/**
 * @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

animation: App-logo-spin infinite 20s linear;
 */
