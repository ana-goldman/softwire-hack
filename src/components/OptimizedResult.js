import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const OptimizedResult = ({ code, analysis, co2Emissions }) => {
  return (
    <div className='mb-4'>
      <h2 className='text-xl font-bold mb-2'>Optimized Code</h2>
      <div className='max-h-80 overflow-y-auto rounded-lg bg-gray-100 p-4'>
        <SyntaxHighlighter language='javascript' style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className='mt-4'>
        <h3 className='text-lg font-semibold'>Optimized Analysis</h3>
        <p>Runtime: {analysis.runtime}</p>
        <p>Memory Usage: {analysis.memoryUsage}</p>
        <p>CO2 Emissions: {co2Emissions} G</p>
      </div>
    </div>
  );
};

export default OptimizedResult;
