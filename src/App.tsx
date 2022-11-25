import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import Navbar from './navbar/Navbar';
import Footer from './estaticos/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/home' element={<Home />} />

        </Routes>

        <Footer />

      </Router>



    </>

  );
}

export default App;
