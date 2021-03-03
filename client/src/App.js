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


const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Route path="/" exact>
          <video id="background-video" autoPlay loop muted type="video/mp4">
            <source src="canoe-video.mp4" />
            Sorry this video is unavailable
          </video>
          <Navigation />
          <Link to="/reservations" ><button className="dispo-button">
            Voir nos disponibilités pour la saison 2021
          </button></Link>
        </Route>
          <Route path="/mission" component={Mission} />
          <Route path="/canoe" component={Canoe} />
          <Route path="/tube" component={Tube} />
          <Route path="/site" component={Site} />
          <Route path="/reservations" component={Reservations} /> 
          <Route path="/contact" component={Contact} />
        <footer>
          {/* <Footer /> */}
        </footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
