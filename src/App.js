import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Dashboard from './components/dashboard';
import Portofolio from './components/portofolio/portofolio';
import "./App.css";

export default function App() {
  return ( 
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portofolio" element={<Portofolio />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

