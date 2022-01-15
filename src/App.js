import React, {useRef, useState } from "react";
import Home from './components/Home'
import Skills from "./components/Skills";
import About from "./components/About";

function App() {

  const nav = useRef(null);
  const sections = ['home', 'skills', 'about']
  const [displayPage, setDisplayPage] = useState(0);

  function changeSideNavFocus(i) {
    setDisplayPage(i)
    // remove all active classes 
    for(const reference of references) {
      reference.current.classList.remove('sidenav-active')
    }
    // add active class to only clicked component 
    references[i].current.classList.add('sidenav-active')
  }
  
  // create a reference for each nav item 
  const references = Array(sections.length).fill(0).map(() => React.createRef());

  const sideNavItems = sections.map((section, i) => {
    return(
      <a key={i} className="sidenav-item" ref={references[i]} onClick={()=>changeSideNavFocus(i)} href={`#${section}`}> </a>
    )    
  })

 

  return (
    <div className="container">
      {/* {getMainPage()} */}
      
      <section id='home'> <Home/></section>
      <section id='skills' ><Skills/> </section>
      <section id='about'><About/> </section>
      
      <nav className="sidenav" ref={nav}> 
        {sideNavItems} 
      </nav>
    </div>
    
  );
}

export default App;

