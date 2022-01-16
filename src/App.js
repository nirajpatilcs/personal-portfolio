import React, {useEffect, useRef, useState } from "react";
import Home from './components/Home'
import Skills from "./components/Skills";
import About from "./components/About";

function App() {

  const useSectionOnScreen = (options, id) => {
    const sectionRef = useRef(null)
    const sectionInView = (entries) => {
      const [entry] = entries
      if(entry.isIntersecting) {
          changeSideNavFocus(id)
      } 
    }

    useEffect(() => {
      const observer = new IntersectionObserver(sectionInView, options)
      if (sectionRef.current) observer.observe(sectionRef.current)

      return () => {
        if(sectionRef.current) observer.unobserve(sectionRef.current) 
      }
    }, [sectionRef, options])

    return [sectionRef]
  }

  const sections = ['home', 'skills', 'about']
  
  // create a reference for each nav item 
  const references = Array(sections.length).fill(0).map(() => React.createRef());

  function changeSideNavFocus(i) {
    // remove all active classes 
    for(const reference of references) {
        //check for null value
        if(reference.current) {
          reference.current.classList.remove('sidenav-active') 
        }
    }
    // add active class to only clicked component  & check for null value 
    if(references[i].current) {
      references[i].current.classList.add('sidenav-active')
    }
  }



  const sideNavItems = sections.map((section, i) => {
    return(
      <a key={i} className='sidenav-item' ref={references[i]} onClick={()=>changeSideNavFocus(i)} href={`#${section}`}> </a>
    )    
  })

  // -========================= try find better way to implement this ===========================
  const options = {
    root: null, 
    rootMargin: "0px", 
    threshold: 0.7
  }
  
  const [homeRef] = useSectionOnScreen (options, 0)
  const [skillsRef] = useSectionOnScreen (options, 1)
  const [aboutRef] = useSectionOnScreen (options, 2)

  return (
    <div className="container">
      
      <section id='home' ref={homeRef}> <Home/></section>
      <section id='skills' ref={skillsRef}><Skills/> </section>
      <section id='about' ref={aboutRef}><About/> </section>
      
      <nav className="sidenav" > 
        {sideNavItems} 
      </nav>
    </div>
    
  );
}

export default App;

