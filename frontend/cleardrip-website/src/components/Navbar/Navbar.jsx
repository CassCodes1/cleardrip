import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MenuItems, disableScroll, closeNav } from './MenuItems';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  // See MenuItems.js for disableScroll and closeNav functions
  const handleClick = () => {
    // this.setState({ clicked: !this.state.clicked });
    setClicked(!clicked);
    disableScroll();
  };

  // Set active class on nav link
  const router = useRouter();

  return (
    <nav className='NavbarItems'>
      <div className='logo-container'>
        <Link className='logo-navbar' href='/' onClick={closeNav}>
          <img src='/assets/logo/logo-new.png' alt='Clear Drip Logo' />
        </Link>
      </div>
      <button className='menu-icon' onClick={handleClick}>
        {clicked ? (
          <FaTimes className='fa-times' />
        ) : (
          <FaBars className='fa-bars' />
        )}
      </button>
      <ul id='navMenu' className={clicked ? 'nav-menu active' : 'nav-menu '}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.url}
                className={
                  router.pathname === item.url ? 'nav-link active' : ''
                }
                onClick={handleClick}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
