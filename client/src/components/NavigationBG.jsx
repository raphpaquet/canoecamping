import './NavigationBG.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from '../components/DropDownMenu';



export default function Navigation() {

  return (
    <div className="navbar-BG">
      <Link to="/"><img className="logo" src="/images/logo.png" /></Link>
      <ul className="list-action">
        <DropDownMenu 
          title={"Les Activités"} 
          first={"Canot"} 
          firstLink={'/canoe'} 
          second={"Tubes"} 
          secondLink={"/tube"} 
          third={"Navette"} 
          thirdLink={"/navette"}
        />
        <DropDownMenu 
          title={"À propos"} 
          first={"Notre Mission"} 
          firstLink={'/mission'} 
          second={"La région"} 
          secondLink={"/region"} 
          third={"Sécurité"} 
          thirdLink={"/securite"}
          fourth={"Le site"}
          fourthLink={"/site"}
        />
        <Link to="/reservations"><li className="action-li">Réservations</li></Link>
        <Link to="/contact"><li className="action-li">Nous contacter</li></Link>
      </ul>
    </div>
  )
}