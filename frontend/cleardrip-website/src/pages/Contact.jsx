import Card from '../components/Card/Card';
import PhoneIcon from '../assets/icons/call-us-icon.svg';
import EnvelopeIcon from '../assets/icons/envelope-icon.svg';
import ContactForm from '../components/ContactForm/ContactForm';
import Accordion from '../components/Accordion/Accordion';

const Contact = () => {
  return (
    <>
      <section className='page-heading'>
        <div className='container'>
          <h1>Contact</h1>
        </div>
      </section>
      <section className='page-info'>
        <div className='container'>
          <div className='intro-text'>
            <h2>Get in touch</h2>
            <p>
              Whether you&#39;re after a quote, making a booking or maybe you
              have a question...you&#39;re in the right place! Below you&#39;ll
              find some answers to your questions, and ways to get in touch with
              us if you have further queries.
            </p>
          </div>
        </div>
      </section>
      <section className='contact-methods'>
        <div className='container'>
          <div className='card-wrapper'>
            <Card
              className='card card--entitlements card--contact'
              imgSrc={PhoneIcon}
              imgAlt='mobile phone icon'
              title='Call Us'
              info='Phone us and we will be more than happy to discuss which service suits you best.'
              linkUrl1='tel:+447360623015'
              linkInfo1='Mobile: 07360 623 015'
              linkUrl2='tel:+441134180532'
              linkInfo2='Landline: 0113 418 0532'
            />
            <Card
              className='card card--entitlements card--contact'
              imgSrc={EnvelopeIcon}
              imgAlt='envelope icon'
              title='Send us a message'
              info='You can send us an email using the contact form below. Alternatively, you can send one to the email address listed here.'
              linkUrl1='mailto:info@cleardrip.co.uk'
              linkInfo1='Email: info@cleardrip.co.uk'
            />
          </div>
        </div>
      </section>
      <section className='form-section' id='form'>
        <div className='container'>
          <div className='form-container'>
            <h2>Contact Form</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className='faq-section'>
        <div className='container'>
          <h2>
            <span>F</span>requently <span>A</span>sked <span>Q</span>uestions
          </h2>
          <div className='accordion-wrapper'>
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
