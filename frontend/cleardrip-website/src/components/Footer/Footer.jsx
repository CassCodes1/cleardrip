import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footer-contents'>
        <div className='footer-top'>
          <div className='logo-footer'>
            <Link href='/'>
              <img src='/assets/logo/logo-new.png' alt='Clear Drip Logo' />
            </Link>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-left'>
            <div className='contact-details'>
              <div className='footer-call-us'>
                <h2>Call us</h2>
                <div className='phone'>
                  <address className='mobile'>
                    <a href='tel:+447360623015'>Mobile: 07360 623 015</a>
                  </address>
                  <address>
                    <a href='tel:+441134180532'>Landline: 0113 418 0532</a>
                  </address>
                </div>
              </div>
              <div className='footer-email-us'>
                <h2>Email us</h2>
                <address className='email'>
                  <a href='mailto:info@cleardrip.co.uk'>info@cleardrip.co.uk</a>
                </address>
              </div>
            </div>
          </div>
          <div className='footer-centre'>
            <nav className='footer-nav'>
              <h2>Browse</h2>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='about'>About</Link>
                </li>
                <li>
                  <Link href='services'>Services</Link>
                </li>
                <li>
                  <Link href='contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer-right'>
            <div className='footer-socials'>
              <div className='icon-wrapper'>
                <a
                  href='https://www.facebook.com/people/CLEAR-DRIP-LTD/100087404719440/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebook className='social-icon' />
                </a>
              </div>
              <div className='icon-wrapper'>
                <a
                  href='https://www.instagram.com/clear.drip/?igshid=MmU2YjMzNjRIOQ'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram className='social-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>Clear Drip {currentYear} &copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
