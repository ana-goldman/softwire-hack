import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import AnalysisResult from './components/AnalysisResult';
import OptimizedResult from './components/OptimizedResult';
import Button from './components/Button';
import data from './data/dummyData.json';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [optimizedCode, setOptimizedCode] = useState('');
  const [optimizedAnalysis, setOptimizedAnalysis] = useState(null);

  const handleAnalyze = (code) => {
    // Simulate analysis
    const matchedData = data.find((data) => data.input.code.trim() === code.trim());
    if (matchedData) {
      setCode(matchedData.input.code);
      setAnalysis({ runtime: matchedData.input.runtime, memoryUsage: matchedData.input.memory });
    } else {
      setAnalysis({ runtime: 'Not found', memoryUsage: 'Not found' });
    }
  };

  const handleOptimize = (inputCode) => {
    // Simulate optimization
    const matchedData = data.find((item) => item.input.code.trim() === inputCode.trim());

    if (matchedData) {
      setOptimizedCode(matchedData.output.code);
      setOptimizedAnalysis({
        runtime: matchedData.output.runtime,
        memoryUsage: matchedData.output.memory,
      });
    } else {
      setOptimizedCode('');
      setOptimizedAnalysis(null);
    }
  };

  return (
    <div className='App'>
      <h1>Code Analysis and Optimization</h1>
      <CodeInput onAnalyze={handleAnalyze} />
      {analysis && <AnalysisResult code={code} analysis={analysis} />}
      <Button onOptimize={() => handleOptimize(code)} />
      {optimizedCode && <OptimizedResult code={optimizedCode} analysis={optimizedAnalysis} />}
    </div>
  );
};

export default App;
