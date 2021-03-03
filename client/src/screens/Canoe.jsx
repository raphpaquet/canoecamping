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
        <Navigation />
        {/* <h2 className="title">Les activités</h2> */}
        <div className="activity">
          <div className="img-text">
            <img className="activity-img" src="/images/canoe.jpg" />
            <h3 className="activity-title" onClick={handleClick}>Canoe & Canoe/Camping<ArrowDown onClick={handleClick}/></h3>
          </div>
          <div className="activity-info" ref={activityRef}>
            <p className="activity-text">
            I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
            </p>
          </div>
        </div>
      </div>
  )
}