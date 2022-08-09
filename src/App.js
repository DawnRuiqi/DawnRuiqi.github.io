
import React from 'react';
import { sliderData } from './components/project/import';
import { Navbar, Home, Experience, Works, Scroll, Footer } from './components';

import './App.css';


const App = () => (
  
  <div className="App">
   <div className="contents">
      <Navbar />
      <Home />
      <Scroll />
    </div>
    <Experience />
    <Works slides={sliderData} />
    <Footer />
  </div> 
);

export default App