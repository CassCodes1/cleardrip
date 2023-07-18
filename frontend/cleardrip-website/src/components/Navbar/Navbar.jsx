import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItems, disableScroll, closeNav } from './MenuItems';
import './Navbar.css';
import Logo from '../../assets/logo/new-logo.svg';

class Navbar extends Component {
  state = { clicked: false };

  // See MenuItems.js for disableScroll and closeNav functions
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    disableScroll();
  };

  render() {
    return (
      <nav className='NavbarItems'>
        <div className='logo-container'>
          <Link className='logo-navbar' to='/' onClick={closeNav}>
            <img src={Logo} alt='Clear Drip Logo' />
          </Link>
        </div>
        <button className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            alt='toggle menu icon'
          ></i>
        </button>
        <ul
          id='navMenu'
          className={this.state.clicked ? 'nav-menu active' : 'nav-menu '}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} onClick={this.handleClick}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
