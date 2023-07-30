import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
