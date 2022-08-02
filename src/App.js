
import React from 'react';

import { Footer, Experience, Project, Contact, Header } from './containers';
import { Resume, Navbar } from './components';

import './App.css';

const App = () => (
  
  <div className="App">
   <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Experience />
    <Resume />
    <Project />
    <Contact />
    <Footer />
  </div> 
);

export default App