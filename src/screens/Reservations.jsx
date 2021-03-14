import './Reservations.scss';
import Burger from '../components/Burger';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Reservations() {

   // Burger menu open/close
   const [open, setOpen] = useState(false);

  return (
    <div id="reservation">
      <nav className="navbarApp color">
            <Navigation className="nav-big-screen"/>
            <div id="nav-small-screen">
          <Link to="/"><img className="logo-small-screen" src="/images/logo.png" /></Link>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen}/>
            </div>
          </nav>
      <h2 className="title">Réservations</h2>
    </div>
  )
}