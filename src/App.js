import React, {useState} from 'react';
import './App.css';
import FinancialForm from './FinancialForm';
import Result from './Result';

function App() {
const [result,setResult]=useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Prediction</h1>
      </header>
      {
        result.length > 0 && 
        <>
          <Result result={result}/>
          <button className="clearbtn" onClick={()=> {
            setResult("");
          }}>
            Clear Result</button>
        </>
      }
      {
        result.length===0 && <FinancialForm setResult={setResult}/>
      }
      
    </div>
  );
}

export default App;
