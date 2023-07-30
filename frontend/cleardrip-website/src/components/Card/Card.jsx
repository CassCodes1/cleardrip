import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    className,
    imgClassName,
    imgSrc,
    imgAlt,
    title,
    info,
    linkUrl1,
    linkUrl2,
    linkInfo1,
    linkInfo2,
  } = props;

  Card.propTypes = {
    className: PropTypes.string,
    imgClassName: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    linkUrl1: PropTypes.string,
    linkUrl2: PropTypes.string,
    linkInfo1: PropTypes.string,
    linkInfo2: PropTypes.string,
  };

  return (
    <div className={className}>
      <div className='card-top'>
        <img className={imgClassName} src={imgSrc} alt={imgAlt} />
      </div>
      <div className='card-bottom'>
        <h3>{title}</h3>
        <p>{info}</p>
        <br />
        <div className='contact-us'>
          <address>
            <a href={linkUrl1}>{linkInfo1}</a>
          </address>
          <address>
            <a href={linkUrl2}>{linkInfo2}</a>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Card;
