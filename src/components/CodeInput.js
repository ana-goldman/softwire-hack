import React, { useState } from 'react';

const CodeInput = ({ onAnalyze }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleAnalyzeClick = () => {
    onAnalyze(code);
    setCode('');
  };

  return (
    <div>
      <textarea value={code} onChange={handleChange} placeholder='Paste your code here' />
      <button onClick={handleAnalyzeClick}>Analyze</button>
    </div>
  );
};

export default CodeInput;
