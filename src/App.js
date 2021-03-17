import './App.scss';
import React from 'react';
import Footer from './components/Footer';
import { useRef, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Helmet } from 'react-helmet';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
// import About from './screens/About';
// import Contact from './screens/Contact';
// import Reservations from './screens/Reservations';
// import Canoe from './screens/Canoe';
// import Tube from './screens/Tube';
// import Navette from './screens/Navette';
// import Security from './screens/Security';
// import Politics from './screens/Politics';
// import RiviereMauve from './screens/RiviereMauve';
// import RiviereNoire from './screens/RiviereNoire';
// import RiviereOrange from './screens/RiviereOrange';
import Activity from './components/Activity';
import Rivieres from './components/Rivieres';
import Navigation from './components/Navigation';
import Homepage from  './screens/Homepage';
const About = React.lazy(() => import('./screens/About'));
const Contact = React.lazy(() => import('./screens/Contact'));
const Reservations = React.lazy(() => import('./screens/Reservations'));
const Canoe = React.lazy(() => import('./screens/Canoe'));
const Tube = React.lazy(() => import('./screens/Tube'));
const Navette = React.lazy(() => import('./screens/Navette'));
const Security = React.lazy(() => import('./screens/Security'));
const Politics = React.lazy(() => import('./screens/Politics'));
const RiviereMauve = React.lazy(() => import('./screens/RiviereMauve'));
const RiviereNoire = React.lazy(() => import('./screens/RiviereNoire'));
const RiviereOrange = React.lazy(() => import('./screens/RiviereOrange'));

// after calling LogRocket.init()
setupLogRocketReact(LogRocket);
LogRocket.init('ylqmcd/ars');




const history = createBrowserHistory();


function App(props) {

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }


  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais",
      name: "Wilderness river adventure",
      summary: "Canoe Camping Adventures agency of Outaouais",
      button: "Book for 2021 season"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière",
      name: "Aventure rivière sauvage",
      summary: "Agence d'aventures de canot camping de l'Outaouais",
      button: "Réserver pour la saison 2021"
    }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);


  // Scroll down button arrow
  const activitySectionRef = useRef();


  return (
    <Router history={history} language={language}>
      <div className="App">
        <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
          <nav className="navbarApp" >
            <Navigation className="nav-big-screen"
              language={language}
              handleSetLanguage={language => {
                setLanguage(language);
                storeLanguageInLocalStorage(language)
              }}
              ref={activitySectionRef}
              />
          </nav>
          <Switch>
            <Route path="/" exact>
              <nav className="navbarApp" style={{background: "transparent"}}></nav>
              <Homepage language={language}/>
              <div ref={activitySectionRef} >
              <Activity language={language}
              />
              </div>
              <Rivieres language={language}/>
            </Route>
          <React.Suspense fallback={<p>...Loading</p>}>
            <Route path="/canoe">
              <Canoe language={language}/> 
            </Route>
            <Route path="/tube">
                <Tube language={language}/>
            </Route>
            <Route path="/navette">
                <Navette language={language}/>
            </Route>
            <Route path="/about">
            <nav className="navbarApp" style={{background: "black"}}></nav>
              <About language={language} />
            </Route>
            <Route path="/rivierenoire">
                <RiviereNoire language={language} />
            </Route>
            <Route path="/rivieremauve">
                <RiviereMauve language={language} />
            </Route>
            <Route path="/riviereorange">
                <RiviereOrange language={language} />
            </Route>
            <Route path="/reservations" component={Reservations} language={language}/> 
            <Route path="/contact" component={Contact} language={language}/>
            <Route path="/securite" component={Security} language={language}/>
            <Route path="/politique" component={Politics} language={language} />
      </React.Suspense>
          </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
