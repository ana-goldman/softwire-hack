import React from 'react';

const Button = ({ onOptimize }) => {
  return (
    <div className='mb-4'>
      <button
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
        onClick={onOptimize}
      >
        Optimize
      </button>
    </div>
  );
};

export default Button;
