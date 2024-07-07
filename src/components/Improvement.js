import React from 'react';

const Improvement = ({ originalCo2, optimizedCo2 }) => {
  if (!originalCo2 || !optimizedCo2) return null;

  const improvement = ((originalCo2 - optimizedCo2) / originalCo2) * 100;

  return (
    <div>
      <h2>CO2 Emissions Improvement</h2>
      <p>Original CO2 Emissions: {originalCo2} grams</p>
      <p>Optimized CO2 Emissions: {optimizedCo2} grams</p>
      <p>Improvement: {improvement.toFixed(2)}%</p>
    </div>
  );
};

export default Improvement;
