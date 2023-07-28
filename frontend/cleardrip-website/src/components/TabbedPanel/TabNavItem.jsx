import PropTypes from 'prop-types';

const TabNavItem = (props) => {
  const { id, title, activeTab, setActiveTab } = props;

  TabNavItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func,
  };

  // Function to set content for active tab
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? 'active' : ''}>
      {title}
    </li>
  );
};

export default TabNavItem;
