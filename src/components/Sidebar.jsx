import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style/navbar.css'
import { Icon } from '@iconify/react';
import whitelogo from '../assets/img/whitelogo.png'

function Navigation() {
  const [click, setclick] = useState(true);
  function handle() {
    setclick(!click);
  }
  return (
    <header>
      <div className="container">
        <nav className="navigation">
          <Link className='logo-container' to="/">
            <img src={whitelogo} alt="Logo" className="logo" />          
          </Link>
          <div className="mobile_menu_icon" onClick={handle}>
            
            <ion-icon
              name={click ? 'menu-outline' : 'close-outline'}
            ><Icon icon="ep:menu" color="royalblue" width="26" height="26" /></ion-icon>
          </div>
        <ul className={click ? 'nav_menu' : 'nav_menu active'}>
  <li className="nav_list">
    <NavLink exact to="/" className="nav_link" onClick={handle}>
      Home
    </NavLink>
  </li>
  <li className="nav_list">
    <NavLink to="/services" className="nav_link" onClick={handle}>
      Services
    </NavLink>
  </li>

  <li className="nav_list">
    <NavLink to="/projects" className="nav_link" onClick={handle}>
      Projects
    </NavLink>
  </li>
  <li className="nav_list">
    <NavLink to="/about" className="nav_link" onClick={handle}>
      About
    </NavLink>
  </li>
 
  <li className="nav_list">
    <NavLink to="/contact" className="nav_link" onClick={handle}>
      Contact
    </NavLink>
  </li>
</ul>

        </nav>
      </div>
    </header>
  );
}

export default Navigation;
