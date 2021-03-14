import './App.scss';
import Footer from './components/Footer';
import { useRef, useState } from 'react';
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { useIntersection } from 'react-use';
import { createBrowserHistory } from 'history';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
import About from './screens/About';
import Contact from './screens/Contact';
import Reservations from './screens/Reservations';
import Canoe from './screens/Canoe';
import Tube from './screens/Tube';
import Navette from './screens/Navette';
import Security from './screens/Security';
import Politics from './screens/Politics';
import RiviereMauve from './screens/RiviereMauve';
import RiviereNoire from './screens/RiviereNoire';
import RiviereOrange from './screens/RiviereOrange';
import Navigation from './components/Navigation';
import Activity from './components/Activity';
import Rivieres from './components/Rivieres';
import ArrowDown from './components/ArrowDown';
import Burger from './components/Burger';
import Menu from './components/Menu';



const history = createBrowserHistory();

// const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

//   document.addEventListener("DOMContentLoaded", function(event){
//     tl.to('.intro', {visibility: "visible"})
//     tl.to('.text', { y:'0%', duration: 1, stagger: 0.50 });
//     tl.to('.slider', { y:"-100%", duration: 1.5, delay: 0.5 });
//     tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
//     tl.fromTo('nav', { opacity:0 }, { opacity:1 , duration: 1 });
//     tl.fromTo('.big-text', { opacity:0 }, { opacity:1 , duration: 1 }, "-=1" );
//   })


function App() {

  // Scroll down button arrow
  const activitySectionRef = useRef();
  const handleClick = () => {
    activitySectionRef.current.scrollIntoView({ behavior: 'smooth' })
   }

  // Burger menu open/close
  const [open, setOpen] = useState(false);

  // Animation scroll down 
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px', // 0 = bottom of the page
    threshold: 0.5 // rep % (1 = 100%) = see 100% of the content when the ancester content is done
  })

  // fade in and fade out animation function 
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1, 
      y: -60, 
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0, 
      y: -20, 
      ease: "power4.out",
    });
  };

  // checking to see when the viewport is visible to the user 
  intersection && intersection.intersectionRatio < 0.9
  // not reached 
  ? fadeOut(".fadeIn")
  // reached 
  : fadeIn(".fadeIn")

  return (
    <Router history={history}>
      <div className="App">
        <Helmet>
          <meta name="description" content="site web de reservation pour aventures de canot et tube riviere outaouais"></meta>
          <title>ARS canot homepage</title>
        </Helmet>
        <Switch>
        <Route path="/" exact>
          <nav className="navbarApp">
            <Navigation className="nav-big-screen"/>
            <div id="nav-small-screen">
          <Link to="/"><img className="logo-small-screen" src="/images/logo.png" /></Link>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen}/>
            </div>
          </nav>
          <main>
            <section className="hero-section centered">
                <video id="background-video" autoPlay loop muted type="video/mp4">
                  <source src="canoe-video.mp4" />
                  Sorry this video is unavailable
                </video>
                <h2 className="hero-heading">Aventure Rivière Sauvage</h2>
                <div className="hero-subheading">Agence d'aventures de canot camping de l'Outaouais</div>
              <Link to="/reservations"><button className="button reserve">
                Réserver pour la saison 2021
                </button></Link>
                <div className="arrow-app">
                  <h5 onClick={handleClick}>Scroll Down</h5>
                  <ArrowDown onClick={handleClick}/>
                </div>
            </section>
          </main>
          <div ref={activitySectionRef} >
            <Activity />
          </div>
          <Rivieres />
          <Footer />
          {/* <div className="intro">
            <div className="intro-text">
              <h1 class="hide">
                <span className="text">Go</span>
              </h1>
              <h1 class="hide">
                <span className="text">Play</span>
              </h1>
              <h1 class="hide">
                <span className="text">Outside.</span>
              </h1>
            </div>

          </div>
          <div className="slider"></div> */}
        </Route>
          <Route path="/about" component={About} />
          <Route path="/canoe" component={Canoe} />
          <Route path="/tube" component={Tube} />
          <Route path="/navette" component={Navette} />
          <Route path="/rivierenoire" component={RiviereNoire} />
          <Route path="/riviereorange" component={RiviereOrange} />
          <Route path="/rivieremauve" component={RiviereMauve} />
          <Route path="/reservations" component={Reservations} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/securite" component={Security} />
          <Route path="/politique" component={Politics} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;
