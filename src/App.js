import React from "react";
import Home from './components/Home'
import Skills from "./components/Skills";
import About from "./components/About";

function App() {

  return (
    <div className="container">
      <section id='home'> 
        <Home/>
      </section> 

      <section id='skills'> 
         <Skills/>
      </section>

      <section id='about'> 
        <About/>
      </section>
      
      <nav className="sidenav"> 
        <a className="sidenav-item sidenav-active" href="#home"> </a>
        <a className="sidenav-item" href="#skills"> </a> 
        <a className="sidenav-item" href="#about"></a>  
        
      </nav>
    </div>
    
  );
}

export default App;

