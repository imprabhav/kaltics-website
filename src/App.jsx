import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import AllBlog from './components/AllBlog.jsx';
import SingleBlog from './components/SingleBlog.jsx';
import Career from './components/Career.jsx';
import Contact2 from './components/contact2.jsx';
import ServicePage from './components/service/ServicePage'
import { array2 } from './main'
import ScrollToTop from './components/ScrollToTop.jsx';

const App = () => {
  return (
    <Router>
    <ScrollToTop/>
      <Routes>
      {array2.map((a) => (
          <Route path={a.path} element={<ServicePage value={a.title}
          />} key={a.title} />

        ))}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<AllBlog/>} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/contact" element={<Contact2/>} />

      </Routes>
    </Router>
  );
}

export default App;
