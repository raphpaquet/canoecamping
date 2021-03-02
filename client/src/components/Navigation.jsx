import './Navigation.scss';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navbar">
      <Link to="/"><img className="logo" src="/images/logo.png" /></Link>
      <ul className="list-action">
        <Link to="/mission"><li className="action-li">Notre mission</li></Link>
        <Link to="/activites"><li className="action-li">Les activités</li></Link>
        <Link to="/site"><li className="action-li">Le site</li></Link>
        <Link to="/reservations"><li className="action-li">Réservations</li></Link>
        <Link to="/contact"><li className="action-li">Nous contacter</li></Link>
      </ul>
    </div>
  )
}