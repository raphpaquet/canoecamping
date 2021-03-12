import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: 'fit-content',
    marginTop: '1rem',
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
    fontSize: "2rem",
    '&:active': {
      opacity: '0.6',
      fontWeight: 'bold',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
export default function DropDownMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="action-li"
        aria-owns={anchorEl ? "customized-menu" : undefined}
        aria-haspopup="true"
        style={{fontSize:"1.5rem", letterSpacing: "0.2rem"}}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {props.title}<KeyboardArrowDownIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
            <StyledMenuItem>
              <Link to={props.firstLink}><li className="action-subli" style={{color: "black"}}>{props.first}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.secondLink}><li className="action-subli" style={{color: "black"}}>{props.second}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.thirdLink}><li className="action-subli" style={{color: "black"}}>{props.third}</li></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link to={props.fourthLink}><li className="action-subli" style={{color: "black"}}>{props.fourth}</li></Link>
            </StyledMenuItem>
          </StyledMenu>
    </div>
  );
}