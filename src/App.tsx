import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './navbar/Navbar';
import Footer from './estaticos/footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
    
  );
}

export default App;
