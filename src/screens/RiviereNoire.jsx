import Navigation from '../components/Navigation';
import Burger from '../components/Burger';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { useState } from 'react';
import './Riviere.scss';

export default function RiviereNoire() {

  // Burger menu open/close
  const [open, setOpen] = useState(false);

  return (
    <div className="riviere-noire">
      <nav className="navbarApp color">
            <Navigation className="nav-big-screen"/>
            <div id="nav-small-screen">
          <Link to="/"><img className="logo-small-screen" src="/images/logo.png" /></Link>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen}/>
            </div>
          </nav>
      <h1 className="title">La Rivière Noire</h1>
      
    </div>
  )
}