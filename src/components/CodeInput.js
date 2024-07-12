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
    <div className='max-w-screen-md mx-auto mb-4'>
      <textarea
        className='border border-gray-300 rounded-md p-2 w-4/5 mx-auto h-40 resize-none block'
        value={code}
        onChange={handleChange}
        placeholder='Paste your code here'
      />
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 block mx-auto'
        onClick={handleAnalyzeClick}
      >
        Analyze
      </button>
    </div>
  );
};

export default CodeInput;
