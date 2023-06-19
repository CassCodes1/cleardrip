const getHomePage = (req, res) => {
  res.status(200).json({ message: 'Home' });
};

const getAboutPage = (req, res) => {
  res.status(200).json({ message: 'About' });
};

const getServicesPage = (req, res) => {
  res.status(200).json({ message: 'Services' });
};

module.exports = {
  getHomePage,
  getAboutPage,
  getServicesPage,
};
