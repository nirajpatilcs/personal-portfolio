import React, {useEffect, useRef, useState } from "react";
import Home from './components/Home'
import Skills from "./components/Skills";
import About from "./components/About";

function App() {

  const sections = ['home', 'skills', 'about']

  function changeSideNavFocus(i) {
    // remove all active classes 
    for(const reference of references) {
      reference.current.classList.remove('sidenav-active')
    }
    // add active class to only clicked component 
    references[i].current.classList.add('sidenav-active')
  }
  
  // create a reference for each nav item 
  const references = Array(sections.length).fill(0).map(() => React.createRef());

  //trying to implement auto sidenav active
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const sideNavItems = sections.map((section, i) => {
    return(
      <a key={i} className='sidenav-item' ref={references[i]} onClick={()=>changeSideNavFocus(i)} href={`#${section}`}> </a>
    )    
  })


  const sectionInView = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
    if(isVisible){
      changeSideNavFocus(1)
    }
  }

  const options = {
    root: null, 
    rootMargin: "0px", 
    threshold: 0.6,
  }


  useEffect(() => {
    const observer = new IntersectionObserver(sectionInView, options)
    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if(sectionRef.current) observer.unobserve(sectionRef.current) 
    }
  }, [sectionRef, options])

 
  return (
    <div className="container">
      {/* {getMainPage()} */}
      
      <section id='home'> <Home/></section>
      <section id='skills' ref={sectionRef}><Skills/> </section>
      <section id='about'><About/> </section>
      
      <nav className="sidenav" > 
        {sideNavItems} 
      </nav>
    </div>
    
  );
}

export default App;

