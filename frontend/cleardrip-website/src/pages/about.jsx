import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Clear Drip | About</title>
      </Head>
      <section className='page-heading'>
        <div className='container small'>
          <h1>About Us</h1>
        </div>
      </section>
      <section className='hero-image'>
        <div className='container'>
          <img
            src='/assets/images/cleardrip-artwork.jpeg'
            alt='clear drip artwork'
          />
        </div>
      </section>
      <section className='page-info'>
        <div className='container'>
          <div className='intro-text'>
            <h2>Who are we?</h2>
            <p>
              Established in 2022, Clear Drip are a domestic and commercial
              window cleaning service based in Leeds, West Yorkshire. Whilst the
              majority of our customers are within the West Yorkshire region, we
              are happy to accept bookings outside of this area - please do not
              hesitate to ask, and we will do our best to accommodate to you. We
              focus on providing an outstanding service to our customers, at a
              price that doesn&#39;t break the bank.
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
