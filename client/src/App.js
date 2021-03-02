import './App.scss';
import Footer from './components/Footer';
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Activities from './screens/Activity';
import Mission from './screens/Mission';
import Site from './screens/Site';
import Contact from './screens/Contact';
import Reservations from './screens/Reservations';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <video id="background-video" autoPlay loop muted type="video/mp4">
            <source src="canoe-video.mp4" />
            Sorry this video is unavailable
          </video>
          <Navigation />
          <button className="dispo-button">
            Voir nos disponibilités pour la saison 2021
          </button>
        </Route>
          <Route path="/mission" component={Mission} />
          <Route path="/activites" component={Activities} />
          <Route path="/site" component={Site} />
          <Route path="/reservations" component={Reservations} /> 
          <Route path="/contact" component={Contact} />
        <footer>
          <Footer />
        </footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
