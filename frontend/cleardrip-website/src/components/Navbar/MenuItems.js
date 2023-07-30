// Menu Items
export const MenuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
  },
  {
    title: 'About',
    url: 'about',
    cName: 'nav-links',
  },
  {
    title: 'Services',
    url: 'services',
    cName: 'nav-links',
  },
  {
    title: 'Contact',
    url: 'contact',
    cName: 'nav-links',
  },
];

// Extra Functionality

//Disable scroll when menu open
export const disableScroll = () => {
  const navMenu = document.getElementById('navMenu');

  navMenu.classList.contains('active') && window.screen.width <= 768
    ? (document.body.style.overflow = 'auto')
    : (document.body.style.overflow = 'hidden');

  if (window.screen.width > 768) {
    document.body.style.overflow = 'auto';
  }
};

// Close menu when logo is clicked
export const closeNav = () => {
  const navMenu = document.getElementById('navMenu');
  const menuIcon = document.getElementsByClassName('menu-icon');

  navMenu.classList.remove('active');
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
};
