import React from 'react';
import './Result.css';

const Result = ({ result }) => {

  // Function to download the result as an HTML file
  const downloadHTML = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Stock Prediction Result</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f2f2f2; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            tr:hover { background-color: #f1f1f1; }
          </style>
        </head>
        <body>
          <h1>Stock Valuation Analysis</h1>
          ${result}
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'stock_prediction_result.html';
    link.click();
  };

  return (
    <div className="resultdiv">
    
      
      <div dangerouslySetInnerHTML={{ __html: result }} id="resultTable" />

    
      <div className="download-buttons">
        <button onClick={downloadHTML} className="download-btn">Download Analysis</button>
      </div>
    </div>
  );
};

export default Result;
