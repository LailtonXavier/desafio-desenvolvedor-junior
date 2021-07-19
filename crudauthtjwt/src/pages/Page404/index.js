import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './error404.json';

import { Error } from './styled';

export default function Page404() {
  const [animationState, setAnimationState] = useState({
    isPaused: false,
    isStopped: true,
    direction: -1,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Error>
      <button
        type="button"
        onClick={() => {
          const reverseAnimation = -1;
          const normalAnimation = 1;

          setAnimationState({
            ...animationState,
            isStopped: false,
            direction:
              animationState.direction === normalAnimation
                ? reverseAnimation
                : normalAnimation,
          });
        }}
      >
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </button>
    </Error>
  );
}
