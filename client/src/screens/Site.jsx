import NavigationBG from "../components/NavigationBG";

import './Site.scss';

export default function Site() {
  return (
    <div id="site">
      <NavigationBG />
        <h2 className="title">Les rivières</h2>
      <div className="rivers">
        <div className="river">
          <img className="river-img" src="/images/canoe.jpg" />
          <h2 className="title">Rivière Noire</h2>
        </div>
        <div className="river">
          <img className="river-img" src="/images/canoe.jpg" />
          <h2 className="title">Rivière </h2>
        </div>
        <div className="river">
          <img className="river-img" src="/images/canoe.jpg" />
          <h2 className="title">Rivière</h2>
        </div>
      </div>
      <div className="camping-site">
        <h2 className="title">Camping sur le site</h2>
        <img className="camping-img" src="/images/night-camping.jpg"/>
      </div>
    </div>
  )
}