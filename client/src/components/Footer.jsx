import './Footer.scss';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {

  return (
  <footer id="footer">
    <div>
      <a href="https://www.facebook.com/" target="_blank"><FacebookIcon className="social" /></a>
      <a href="https://www.instagram.com/" target="_blank"><InstagramIcon className="social"/></a>
    </div>
    <div className="rights">
      @ 2021 Raphaëlle Paquet | All Rights Reserved.
    </div>
  </footer>
  )
}
