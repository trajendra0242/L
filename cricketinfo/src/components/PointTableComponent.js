// PointTableComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointTableComponent = () => {
  const [pointTableData, setPointTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPointTableData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cricket/point-table');
        setPointTableData(response.data);
        console.log(response.data);
        console.log(pointTableData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching point table data');
        setLoading(false);
      }
    };

    fetchPointTableData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>CWC 2023 Point Table</h1>
      {/* Display point table data here */}
      {pointTableData && (
        <div>
          {/* Render point table data */}
          {/* For example: */}
          <table>
        <thead>
          <tr>
            {pointTableData.length > 0 && pointTableData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pointTableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      )}
    </div>
  );
};

export default PointTableComponent;
