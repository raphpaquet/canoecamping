import './Activity.scss';
import Navigation from '../components/Navigation';

export default function Activities() {
  return (
    <div id="activity">
      <Navigation />
      <h2 className="title">Les activités</h2>
      <div className="activity">
        <img className="activity-img" src="/images/canoe.jpg" />
        <div className="activity-info">
          <h3 className="title">Canoe & Canoe/Camping</h3>
          <p className="activity-text">
          I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
          </p>
          <button className="know-more">
            En savoir plus
          </button>
        </div>
      </div>
      <div className="activity">
        <img className="activity-img" src="/images/tubing.jpg" />
        <div className="activity-info">
          <h3 className="title">Tubing</h3>
          <p className="activity-text">
          I'm baby gochujang kinfolk crucifix, yr butcher franzen before they sold out paleo wolf YOLO. Put a bird on it leggings hexagon, truffaut meditation vexillologist copper mug taiyaki. Actually tbh dreamcatcher woke
          </p>
          <button className="know-more">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  )
}