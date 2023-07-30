import PropTypes from 'prop-types';

const TabContent = (props) => {
  const { id, activeTab, children } = props;

  TabContent.propTypes = {
    id: PropTypes.string,
    activeTab: PropTypes.string,
    children: PropTypes.array,
  };

  return activeTab === id ? (
    <div className='tab-content'>{children}</div>
  ) : null;
};

export default TabContent;
