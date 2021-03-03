import './Navigation.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '15rem',
 
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    fontFamily: "'Raleway', serif",
    fontSize: "1.5rem",
    '&:focus': {
      opacity: '0.6',
      fontWeight: 'bold',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Navigation() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="navbar">
      <Link to="/"><img className="logo" src="/images/logo.png" /></Link>
      <ul className="list-action">
        <Link to="/mission"><li className="action-li">Notre mission</li></Link>
        <div>
          <li className="action-li" onClick={handleClick}>Les activités<KeyboardArrowDownIcon /></li>
          <StyledMenu 
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <Link to="/canoe"><li className="action-subli" style={{color: "black"}}>Canot</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to="/tube"><li className="action-subli" style={{color: "black"}}>Tubes</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to="/activites"><li className="action-subli" style={{color: "black"}}>Shuttle</li></Link>
            </StyledMenuItem>
          </StyledMenu>
    </div>


        <Link to="/site"><li className="action-li">Le site</li></Link>
        <Link to="/reservations"><li className="action-li">Réservations</li></Link>
        <Link to="/contact"><li className="action-li">Nous contacter</li></Link>
      </ul>
    </div>
  )
}