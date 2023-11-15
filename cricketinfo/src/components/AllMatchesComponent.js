// AllMatchesComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllMatchesComponent = () => {
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    const fetchAllMatches = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cricket');
        setAllMatches(response.data);
      } catch (error) {
        console.error('Error fetching all matches:', error);
      }
    };

    fetchAllMatches();
  }, []);

  return (
    <div>
      <h2>All Matches</h2>
      <ul>
        {allMatches.map((match, index) => (
          <li key={index}>
            {/* Display details of all matches */}
            {match.teamHeading} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllMatchesComponent;
