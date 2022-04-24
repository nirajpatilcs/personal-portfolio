import React, {useEffect, useRef, useState } from "react";
import Home from './components/Home'
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {

  const [loaderDone, setLoaderDone] = useState(true)

  const useSectionOnScreen = (options, id) => {
    const sectionRef = useRef(null)

    const sectionInView = (entries) => {
      const [entry] = entries
      if(!entry.isIntersecting) {
          return;         
      } else {
        changeSideNavFocus(id) //change side nav
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

  const sections = ['home', 'projects', 'about']

   // create a reference for each nav item 
  const references = Array(sections.length).fill(0).map(() => React.createRef());
  const referencesTopNav = Array(sections.length).fill(0).map(() => React.createRef());

  const navLinks = sections.map((section, i) => {
    return(
      <a className="nav-links" key={i} href={`#${section}`} ref={referencesTopNav[i]}>{section}</a>
    )
  })
  

  function changeSideNavFocus(i) {
    // remove all active classes 

    for(let ref =0; ref< sections.length; ref++) {
      if(references[ref].current) {
          references[ref].current.classList.remove('sidenav-active') 
      }
      if(referencesTopNav[ref].current){
          referencesTopNav[ref].current.classList.remove('active-btn') 
      }
    }
    
    // add active class to only clicked component  & check for null value 
    if(references[i].current) {
      references[i].current.classList.add('sidenav-active')
    }
    if(referencesTopNav[i].current) {
      referencesTopNav[i].current.classList.add('active-btn')
    }
  }

  const sideNavItems = sections.map((section, i) => {
    return(
      <a key={i} className='sidenav-item' ref={references[i]} href={`#${section}`}> </a>
    )    
  })

  // -========================= try find better way to implement this ===========================
  const options = {
    root: null, 
    rootMargin: "0px", 
    threshold: 0.7
  }
  
  const [homeRef] = useSectionOnScreen (options, 0)
  // const [skillsRef] = useSectionOnScreen (options, 2)
  const [projectsRef] = useSectionOnScreen(options, 1)
  const [aboutRef] = useSectionOnScreen (options, 2)
  

  const navFocus = (i) => {
    console.log(sideNavItems[i].props.className )
  }

  const loadingDone = () => {
    setLoaderDone(true);
  }

  return (

          <div className="container">   
            <Navbar navLinks={navLinks}/> 
            <section id='home' ref={homeRef}> <Home navLinks={navLinks} navFocus={navFocus}/></section>
            {/* <section id='skills' ref={skillsRef}><Skills/> </section> */}
            <section id="projects" ref={projectsRef}><Projects/> </section>
            <section id='about' ref={aboutRef}><About/> </section>
            <footer>
              <span className='intro-text-span'>N</span> 
              <p>&copy;2022 NIRAJ PATIL</p> 
            </footer> 
{/*             
            <nav className="sidenav" > 
              {sideNavItems} 
            </nav> */}
          </div>
        ) 
    
}

export default App;

