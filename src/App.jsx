import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
import Login from '/src/components/Login/login';
import Dashboard from '/src/components/Dashboard/dashboard.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path= "/" element= {<Navigate to ='/Login'/>} />
          <Route path="/Login" element= {<Login/>}/>
          <Route path = "/Dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
      </Router>
    );
}

export default App;
