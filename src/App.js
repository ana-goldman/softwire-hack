import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import AnalysisResult from './components/AnalysisResult';
import OptimizedResult from './components/OptimizedResult';
import Improvement from './components/Improvement';
import Button from './components/Button';
import data from './data/dummyData.json';
import { carbonCalculator } from './utils/CarbonCalculator';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [optimizedCode, setOptimizedCode] = useState('');
  const [optimizedAnalysis, setOptimizedAnalysis] = useState(null);
  const [co2Emissions, setCo2Emissions] = useState(null);
  const [optimizedCo2Emissions, setOptimizedCo2Emissions] = useState(null);

  const handleAnalyze = (inputCode) => {
    const matchedData = data.find((data) => data.input.code.trim() === inputCode.trim());
    if (matchedData) {
      setCode(matchedData.input.code);
      setAnalysis({ runtime: matchedData.input.runtime, memoryUsage: matchedData.input.memory });
      const memoryKB = parseFloat(matchedData.input.memory.replace(' KB', ''));
      const runtimeMs = parseFloat(matchedData.input.runtime.replace(' ms', ''));
      setCo2Emissions(carbonCalculator(memoryKB, runtimeMs));
    } else {
      setAnalysis({ runtime: 'Not found', memoryUsage: 'Not found' });
      setCo2Emissions(null);
    }
  };

  const handleOptimize = (inputCode) => {
    const matchedData = data.find((item) => item.input.code.trim() === inputCode.trim());

    if (matchedData) {
      setOptimizedCode(matchedData.output.code);
      setOptimizedAnalysis({
        runtime: matchedData.output.runtime,
        memoryUsage: matchedData.output.memory,
      });
      const memoryKB = parseFloat(matchedData.output.memory.replace(' KB', ''));
      const runtimeMs = parseFloat(matchedData.output.runtime.replace(' ms', ''));
      setOptimizedCo2Emissions(carbonCalculator(memoryKB, runtimeMs));
    } else {
      setOptimizedCode('');
      setOptimizedAnalysis(null);
      setOptimizedCo2Emissions(null);
    }
  };

  return (
    <div className='App'>
      <h1>Code Analysis and Optimization</h1>
      <CodeInput onAnalyze={handleAnalyze} />
      {analysis && <AnalysisResult code={code} analysis={analysis} co2Emissions={co2Emissions} />}
      <Button onOptimize={() => handleOptimize(code)} />
      {optimizedCode && (
        <OptimizedResult
          code={optimizedCode}
          analysis={optimizedAnalysis}
          co2Emissions={optimizedCo2Emissions}
        />
      )}
      {co2Emissions && optimizedCo2Emissions && (
        <Improvement originalCo2={co2Emissions} optimizedCo2={optimizedCo2Emissions} />
      )}
    </div>
  );
};

export default App;
