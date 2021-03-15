import './Canoe.scss';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import Burger from '../components/Burger';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';



export default function Canoe() {

  // Burger menu open/close
  const [open, setOpen] = useState(false);

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <div className="activity">
        <section className="nav-image-tube">
        <nav className="navbarApp absolute" style={{width:"100%"}}>
            <Navigation className="nav-big-screen"/>
            <div id="nav-small-screen">
          <Link to="/"><img className="logo-small-screen" src="/images/logo.png" /></Link>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen}/>
            </div>
          </nav>
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Descente de rivière sur tube<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
          <section className="activity-info" ref={activityRef}>
            <h2 className="activity-summary">Descente de rivière de plaisance de 3km sur la Rivière Noire </h2>
            <div className="activity-container">
              <img className="tube-map" src="/images/map.png" />
              <div className="activity-text-container">
                <p className="activity-text">
                Durée : environ 3h
                </p>
                <p className="activity-text">
                Difficulté: facile/débutant
                </p>
                <p className="activity-text">
                Prix : À partir de 20$
                </p>
                <p className="activity-text">
                Inclusions: Tube & Navette jusqu'au point de départ 
                </p>
              </div>
            </div>
            <button className="button reserve">Réserver</button>
          </section>
        </div>
      </div>
  )
}