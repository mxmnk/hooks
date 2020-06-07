import React from 'react';
import useToggle from './useToggle';

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ':)' : ':('}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? '</3' : '<3'}</h1>
    </div>
  );
}

export default Toggler;