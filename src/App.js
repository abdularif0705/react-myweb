import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' component={<Services/>} />
          <Route path='/products' component={<Products/>} />
          <Route path='/resume' component={<Resume/>} />
          <Route path='/contact' component={<Contact/>} />
          <Route path='/sign-up' component={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
