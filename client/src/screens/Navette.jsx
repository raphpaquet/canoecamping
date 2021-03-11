import './Canoe.scss';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';



export default function Navette() {

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <div className="activity">
        <section className="nav-image-tube">
          <Navigation />
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Service de navette<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
          <section className="activity-info" ref={activityRef}>
            <h2 className="activity-summary">Service de navette | 2 - 10 personnes </h2>
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