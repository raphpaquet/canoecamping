import './Navigation.scss';
import '../App.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import Burger from '../components/Burger';
import Menu from '../components/Menu';



export default function Navigation(props) {

    // Burger menu open/close
    const [open, setOpen] = useState(false);

  return (
    <div className="navigation-bar">
    <div className="nav-big-screen">
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
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
          <div className="language-select">
              <select 
                className="custom-select"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}>
                  <option value="English">English</option>
                  <option value="French">Français</option>
                </select>
            </div>
        </ul>
      </div>
      <div id="nav-small-screen">
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}  ref={props.ref}/>
      </div>
    </div>
  )
}