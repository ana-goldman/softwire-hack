import React from 'react';

const Button = ({ onOptimize }) => {
  return (
    <div>
      <button onClick={onOptimize}>Optimize</button>
    </div>
  );
};

export default Button;
