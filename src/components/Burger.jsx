import './Burger.scss';
import './Menu.scss'


export default function Burger({ open, setOpen }) {

  const openMenu = () => {
    if (!open) {
      document.querySelector('.style-menu').classList.add('transform-open');
      // document.querySelector('div').classList.add('burger-line');
    } else {
      // document.querySelector('div').classList.remove('burger-line');
      document.querySelector('.style-menu').classList.remove('transform-open');
    }
  }
  return (
    <div className="styled-burger" open={open} onClick={() => setOpen(!open), openMenu}>
      <div />
      <div />
      <div />
    </div>
  )
}

