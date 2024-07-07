import React from 'react';

const Improvement = ({ originalCo2, optimizedCo2 }) => {
  if (!originalCo2 || !optimizedCo2) return null;

  const improvement = ((originalCo2 - optimizedCo2) / originalCo2) * 100;

  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold mb-2'>CO2 Emissions Improvement</h2>
      <p className='mb-2'>Original CO2 Emissions: {originalCo2} grams</p>
      <p className='mb-2'>Optimized CO2 Emissions: {optimizedCo2} grams</p>
      <p className='text-3xl font-bold mb-4 text-green-600'>
        Improvement: {improvement.toFixed(2)}%
      </p>
    </div>
  );
};

export default Improvement;
