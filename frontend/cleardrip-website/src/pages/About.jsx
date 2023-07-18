import cleardripArtwork from '../assets/images/cleardrip-artwork .jpeg';

const About = () => {
  return (
    <>
      <section className='page-heading'>
        <div className='container small'>
          <h1>About Us</h1>
        </div>
      </section>
      <section className='hero-image'>
        <div className='container'>
          <img src={cleardripArtwork} alt='clear drip branded vehicle' />
        </div>
      </section>
      <section className='page-info'>
        <div className='container'>
          <div className='intro-text'>
            <h2>Who are we?</h2>
            <p>
              Established in 2022, Clear Drip are a domestic and commercial
              window cleaning service. We focus on providing an outstanding
              service to our customers, at a price that doesn&#39;t break the
              bank.
              <br />
              <br />
              Our close-knit team of professionals are fully trained using our
              pure water cleaning machine, and in providing exceptional customer
              service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
