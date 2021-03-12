import './Navigation.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from '../components/DropDownMenu';



export default function Navigation() {

  return (
    <div className="navbar">
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
        <Link to="/reservations"><li className="action-li">Réservations</li></Link>
        <DropDownMenu 
          title={"À propos"} 
          first={"Notre Mission"} 
          firstLink={'/mission'} 
          second={"La région"} 
          secondLink={"/region"} 
          third={"Sécurité"} 
          thirdLink={"/securite"}
          fourth={"le site"}
          fourthLink={"/site"}
        />
        <Link to="/contact"><li className="action-li">Contact</li></Link>
      </ul>
    </div>
  )
}