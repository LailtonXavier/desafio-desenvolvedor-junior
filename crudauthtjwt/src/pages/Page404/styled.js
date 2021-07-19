import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-weight: 800;
  margin: auto;
  border-top: 2px solid white;
  width: 100vw;
  height: auto;
  background: ${colors.primaryColor};
`;
