import './Canoe.scss';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';



export default function Canoe() {

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <div className="activity">
        <section className="nav-image-canoe">
          <Navigation />
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Canot & Canot/Camping<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
          <section className="activity-info" ref={activityRef}>
            <p className="activity-text">
            I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
            </p>
            <p className="activity-text">
            I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
            </p>
            <p className="activity-text">
            I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
            </p>
            <p className="activity-text">
            I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
            </p>
          </section>
        </div>
      </div>
  )
}