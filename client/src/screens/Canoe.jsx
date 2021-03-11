import './Canoe.scss';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';



export default function Canoe() {

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <Helmet>
          <meta name="description" content="page explicative pour aventure de canot et canot camping Outaouais"></meta>
          <title>ARS canot</title>
        </Helmet>
        <div className="activity">
        <section className="nav-image-canoe">
          <Navigation />
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Canot & Canot/Camping<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
        <section className="activity-info" ref={activityRef}>
          <ul className="canot-choice-list">
            <li>Choix 1</li>
            <li>Choix 2</li>
            <li>Choix 3</li>
            <li>Choix 4</li>
          </ul>
            <h2 className="activity-summary">Aventure Canot-Camping 2 jours</h2>
            <div className="activity-container">
              <img className="tube-map" src="/images/map.png" />
              <div className="activity-text-container">
                <p className="activity-text">
                Durée : 2 jours
                </p>
                <p className="activity-text">
                Difficulté: débutant/intermédiaire
                </p>
                <p className="activity-text">
                Prix : À partir de 50$/jour
                </p>
                <p className="activity-text">
                Inclusions: Canot & Navette jusqu'au point de départ 
                </p>
              </div>
            </div>
            <button className="button reserve">Réserver</button>
          </section>
        </div>
      </div>
  )
}