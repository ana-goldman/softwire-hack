import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import AnalysisResult from './components/AnalysisResult';
import OptimizedResult from './components/OptimizedResult';
import Improvement from './components/Improvement';
import Button from './components/Button';
import Loader from './components/Loader';
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
  const [analysing, setAnalysing] = useState(false);
  const [optimising, setOptimising] = useState(false);

  const handleAnalyze = (inputCode) => {
    setAnalysing(true);
    setTimeout(() => {
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
      setOptimizedCode('');
      setOptimizedAnalysis(null);
      setOptimizedCo2Emissions(null);
      setAnalysing(false);
    }, 1000);
  };

  const handleOptimize = (inputCode) => {
    setOptimising(true);
    setTimeout(() => {
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
      setOptimising(false);
    }, 2000);
  };

  return (
    <div className='App p-4'>
      <h1 className='text-3xl font-bold mb-4'>Code Analysis and Optimization</h1>
      <CodeInput onAnalyze={handleAnalyze} />
      {analysing && <Loader text='Analysing...' />}
      {analysis && <AnalysisResult code={code} analysis={analysis} co2Emissions={co2Emissions} />}
      <Button onOptimize={() => handleOptimize(code)} />
      {optimising && <Loader text='Optimising...' />}
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