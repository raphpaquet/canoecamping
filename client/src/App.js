import './App.scss';
import Footer from './components/Footer';
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Activities from './screens/Canoe';
import Mission from './screens/Mission';
import Site from './screens/Site';
import Contact from './screens/Contact';
import Reservations from './screens/Reservations';
import Navigation from './components/Navigation';
import { createBrowserHistory } from 'history';
import Canoe from './screens/Canoe';
import Tube from './screens/Tube';
import gsap from 'gsap';
import Navette from './screens/Navette';
import Activity from './components/Activity';
import Rivieres from './components/Rivieres';



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
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
        <Route path="/" exact>
          <main>
            <section className="hero-section centered">
                <video id="background-video" autoPlay loop muted type="video/mp4">
                  <source src="canoe-video.mp4" />
                  Sorry this video is unavailable
                </video>
              <nav className="navbarApp">
                <Navigation style={{background: "none"}} />
              </nav>
                <h2 className="hero-heading">Aventure Rivière Sauvage</h2>
                <div className="hero-subheading">Agence d'aventures de canot camping en outaouais</div>
              <Link to="/reservations"><button className="button">
                Réserver pour la saison 2021
                </button></Link>
            </section>
          </main>
          <Activity />
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
          <Route path="/mission" component={Mission} />
          <Route path="/canoe" component={Canoe} />
          <Route path="/tube" component={Tube} />
          <Route path="/navette" component={Navette} />
          <Route path="/site" component={Site} />
          <Route path="/reservations" component={Reservations} /> 
          <Route path="/contact" component={Contact} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;
