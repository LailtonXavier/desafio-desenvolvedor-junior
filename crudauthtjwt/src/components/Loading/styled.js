import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 30px;

  // essa div sera meu fundo
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }
  // colocar o nome na frente da div
  span {
    z-index: 2;
    width: 50px;
    height: 50px;
    background: rgb(190, 4, 1);
    border-radius: 50px;
    margin-left: 15px;

    // adc animation
    animation: move 1s ease-in-out infinite alternate;
  }
  @keyframes move {
    from {
      transform: translateY(-100%);
      background: rgb(236, 42, 57);
    }
    to {
      transform: translateY(100%);
    }
  }

  span:nth-child(2) {
    animation-delay: -0.4s;
    background: rgb(236, 42, 0);
  }
  span:nth-child(3) {
    animation-delay: -0.2s;
    background: rgb(236, 0, 57);
  }
  span:nth-child(4) {
    animation-delay: -0s;
  }
`;
