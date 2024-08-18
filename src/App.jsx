import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import AllBlog from './components/AllBlog.jsx';
import SingleBlog from './components/SingleBlog.jsx';
import Career from './components/Career.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<AllBlog/>} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
        <Route path="/careers" element={<Career/>} />




      </Routes>
    </Router>
  );
}

export default App;
