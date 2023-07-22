import cleardripVan from '../assets/images/cleardrip-van.jpg';
import TabbedPanel from '../components/TabbedPanel/TabbedPanel';

const Services = () => {
  return (
    <>
      <section className='page-heading'>
        <div className='container small'>
          <h1>Services</h1>
        </div>
      </section>
      <section className='hero-image'>
        <div className='container'>
          <img
            className='van'
            src={cleardripVan}
            alt='clear drip branded vehicle'
          />
        </div>
      </section>
      <section className='page-info'>
        <div className='container'>
          <div className='intro-text services'>
            <h2>What do we do?</h2>
            <p>
              Whilst we primarily specialise in window cleaning, we also offer
              gutter cleaning and pressure washing services. Click on the tabs
              below for more information on our services.
            </p>
          </div>
        </div>
      </section>

      <section className='services-info'>
        <div className='container'>
          <TabbedPanel />
        </div>
      </section>
    </>
  );
};

export default Services;
