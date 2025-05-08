import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose'; // 
import Scroll from './components/Scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyChoose />  {/* ✅ Add it here */}
      <Scroll />  {/* ✅ Add it here */}
      
    </div>
  );
}

export default App;
