import { useState } from 'react';
import { Data } from './data';
import './Accordion.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = Data.map((item, index) => {
    const isActive = index === activeIndex;
    const content = isActive ? (
      <div className='accordion-bottom'>{item.content}</div>
    ) : null;

    return (
      <div className='accordion-card' key={item.title}>
        <div className='accordion-top' onClick={() => handleItemClick(index)}>
          <h3>{item.title}</h3>
          <button>{isActive ? <FaMinus /> : <FaPlus />}</button>
        </div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
