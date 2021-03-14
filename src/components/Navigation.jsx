import './Navigation.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';



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
          <DropDownMenu 
            title={"Les rivières"} 
            first={"Rivière Noire"} 
            firstLink={'/rivierenoire'} 
            second={"Rivière Mauve"} 
            secondLink={"/rivieremauve"}
            third={"Rivière Orange"}
            thirdLink={"/riviereorange"}
          />
        <DropDownMenu 
          title={"À propos"} 
          first={"L'entreprise"} 
          firstLink={'/about'} 
          second={"Sécurité"} 
          secondLink={"/securite"}
        />
        <Link to="/reservations"><li className="action-li">Réservations</li></Link>
        <Link to="/contact"><li className="action-li">Contact</li></Link>
      </ul>
    </div>
  )
}