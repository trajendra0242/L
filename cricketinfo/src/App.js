// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LiveMatchComponent from './components/LiveMatchComponent';
import PointTableComponent from './components/PointTableComponent';
import AllMatchesComponent from './components/AllMatchesComponent';

// const LiveMatchComponent = () =>{
//  <p>Hello I am Rajendra</p>
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/live" element={<LiveMatchComponent/>} />
          <Route exact path="/point-table" element={<PointTableComponent/>} />
          <Route exact path="/" element={<AllMatchesComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
