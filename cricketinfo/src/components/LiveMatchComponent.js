// LiveMatchComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveMatchComponent = () => {
  const [liveMatchScores, setLiveMatchScores] = useState([]);

  useEffect(() => {
    const fetchLiveMatchScores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cricket/live');

        setLiveMatchScores(response.data);
        console.log(response.data);
        console.log(liveMatchScores);

      } catch (error) {
        console.error('Error fetching live match scores:', error);
      }
    };

    fetchLiveMatchScores();
  }, []);

  return (
    <div>
      <h2>Live Match Scores</h2>
      <ul>
        {liveMatchScores.map((match, index) => (
          <li key={index}>
            {/* Display live match score details */}
            {match.teamHeading}  {match.battingTeamScore}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMatchComponent;
