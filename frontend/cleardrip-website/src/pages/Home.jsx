import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import QualityIcon from '../assets/icons/quality-guarantee.svg';
import PriceTagIcon from '../assets/icons/pricetag.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import ReminderIcon from '../assets/icons/booking-reminder-icon.svg';
import CreditCardIcon from '../assets/icons/ccard-icon.svg';
import QuoteIcon from '../assets/icons/quote-icon.svg';
import BookingIcon from '../assets/icons/date_time_location.svg';
import CleaningIcon from '../assets/icons/cleaning-icon.svg';
import { useRef } from 'react';

const Home = () => {
  const introSection = useRef(null);

  const scrollToSection = () => {
    window.scrollTo({
      top: introSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            Domestic & Commercial <br />
            Window Cleaning Service
          </h1>
          <Link to='services' className='btn btn--more-info'>
            Find out more &#62;
          </Link>
        </div>
        <button className='arrow-container' onClick={scrollToSection}>
          <p className='arrow'>^</p>
        </button>
      </section>

      <section className='intro' ref={introSection}>
        <div className='container'>
          <div className='intro-text'>
            <h2>Looking for a window cleaner?</h2>
            <p>
              Whether you&#39;re preparing your home for sale, expecting guests
              or perhaps looking for a routine clean - we&#39;re here to help.
              <br />
              <br />
              At Clear Drip we take pride in what we do. Regardless of whether
              you&#39;re a regular or a new client, we always ensure to go the
              extra mile when it comes to our workmanship.
            </p>
          </div>
        </div>

        <section className='why-us'>
          <div className='container'>
            <div className='inner-container'>
              <h2>Why use Clear Drip?</h2>
              <div className='card-wrapper'>
                <Card
                  className='card card--why-us'
                  imgSrc={QualityIcon}
                  imgAlt='quality guarantee icon'
                  title='Quality Assurance'
                  info='We guarantee a quality finish, leaving your windows looking pristine.'
                />
                <Card
                  className='card card--why-us'
                  imgSrc={PriceTagIcon}
                  imgAlt='price tag icon'
                  title='Unbeatable Prices'
                  info='Whilst quality has no price tag, we ensure great value for your money.'
                />
                <Card
                  className='card card--why-us'
                  imgSrc={CalendarIcon}
                  imgAlt='calendar icon'
                  title='Convenience'
                  info='Arrange a booking for a day and time that suits you.'
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className='entitlements'>
        <div className='container'>
          <h2>All our customers are entitled to a...</h2>
          <div className='card-wrapper'>
            <Card
              className='card card--entitlements'
              imgSrc={ReminderIcon}
              imgAlt='text message reminder icon'
              title='Booking Reminder'
              info='We will send you a text message reminder the day prior to your booking.'
            />
            <Card
              className='card card--entitlements'
              imgSrc={CreditCardIcon}
              imgClassName='ccard'
              imgAlt='credit card icon'
              title='Choice of payment methods'
              info='We accept bank transfers, standing orders, cash and contactless card payments.'
            />
          </div>
        </div>
      </section>

      <section className='book-now'>
        <div className='container'>
          <h2>
            Book a window cleaner
            <br />
            in just a few steps
          </h2>
          <div className='card-wrapper'>
            <Card
              className='card card--booking'
              imgSrc={QuoteIcon}
              imgAlt='get a quote icon'
              title='Get a free quote'
              info='Get in touch today for a free quotation. We guarantee our customers the best price.'
            />
            <Card
              className='card card--booking'
              imgSrc={BookingIcon}
              imgAlt='date, time & location icon'
              title='Arrange a booking'
              info='Let us know when and where the clean is required - day, time and location.'
            />
            <Card
              className='card card--booking'
              imgSrc={CleaningIcon}
              imgAlt='window cleaning icon'
              title='Let the cleaning commence'
              info='We arrive on the day of the clean and dazzle you with our unbeatable service.'
            />
          </div>
        </div>
        <div className='cta'>
          <h3>What are you waiting for?</h3>
          <p>Click below to get your free quote today!</p>
          <Link to='contact' className='btn--cta'>
            Get my quote &#62;
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
