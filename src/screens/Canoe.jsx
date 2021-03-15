import './Canoe.scss';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ScrollableTabsButtonAuto from '../components/ScrollableTabs';
import Burger from '../components/Burger';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


export default function Canoe() {

  // Burger menu open/close
  const [open, setOpen] = useState(false);

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <Helmet>
          <meta name="description" content="page explicative pour aventure de canot et canot camping Outaouais"></meta>
          <title>ARS canot</title>
        </Helmet>
        <div className="activity">
        <nav className="navbarApp absolute" style={{width:"100%"}}>
            <Navigation className="nav-big-screen"/>
            <div id="nav-small-screen">
          <Link to="/"><img className="logo-small-screen" src="/images/logo.png" /></Link>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen}/>
            </div>
          </nav>
        <section className="nav-image-canoe">
          
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Canot & Canot/Camping<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
        <section className="activity-info" ref={activityRef}>
          <ScrollableTabsButtonAuto />
          
          </section>
        </div>
      </div>
  )
}