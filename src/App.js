import React from 'react';
import * as THREE from 'three';
import { Navbar, Home, Experience, Works, Scroll, Footer } from './components';
//import AnimatedRabbit from './animatedRabbit/AnimatedRabbit';
//import SceneInit from './animatedRabbit/SceneInit';
import './App.css';


const App = () => (
  
  <div className="App">
   <div className="contents">
      <Navbar />
      <Home />
      
      <Scroll />
    </div>
    <Experience />
    <Works />
    <Footer />
  </div> 
);

export default App