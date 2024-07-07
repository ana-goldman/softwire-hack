import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AnalysisResult = ({ code, analysis }) => {
  return (
    <div className='optimized-code-container'>
      <h2>Analysis Result</h2>
      <SyntaxHighlighter language='javascript' style={tomorrow}>
        {code}
      </SyntaxHighlighter>
      <h3>Optimized Analysis</h3>
      <p>Runtime: {analysis.runtime}</p>
      <p>Memory Usage: {analysis.memoryUsage}</p>
    </div>
  );
};

export default AnalysisResult;
