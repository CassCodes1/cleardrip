import PropTypes from 'prop-types';

const TabContent = (props) => {
  const { id, activeTab, children } = props;

  TabContent.propTypes = {
    id: PropTypes.string,
    activeTab: PropTypes.string,
    children: PropTypes.string, //not sure
  };

  return activeTab === id ? (
    <div className='tab-content'>{children}</div>
  ) : null;
};

export default TabContent;
