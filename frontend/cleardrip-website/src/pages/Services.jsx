import cleardripVan from '../assets/images/cleardrip-van.jpg';

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
          <img src={cleardripVan} alt='clear drip branded vehicle' />
        </div>
      </section>
      <section className='page-info'>
        <div className='container'>
          <div className='intro-text'>
            <h2>What do we do?</h2>
            <p>
              Whilst we primarily specialise in window cleaning, we also offer
              gutter cleaning and pressure washing services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
