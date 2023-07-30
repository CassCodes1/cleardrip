import { useState } from 'react';
import './TabbedPanel.css';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import WindowCleaning from '../../assets/images/window-cleaning.jpg';
import PressureWashing from '../../assets/images/pressure-washing.jpeg';
import GutterCleaning from '../../assets/images/gutter-cleaning.jpg';
import SwipeIcon from '../../assets/icons/swipe-icon.svg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className='tabbed-panel'>
      <ul className='tab-nav'>
        <TabNavItem
          title='Window Cleaning'
          id='tab1'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Pressure Washing'
          id='tab2'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Gutter Cleaning'
          id='tab3'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className='outlet'>
        <TabContent id='tab1' activeTab={activeTab}>
          <img
            className={clicked ? 'swipe-icon d-none' : 'swipe-icon'}
            src={SwipeIcon}
            alt='Swipe left or right icon'
          />
          <div className={clicked ? 'tooltip d-none' : 'tooltip'}>
            <p>
              Swipe left or right above to see our complete list of services.
            </p>
            <button onClick={handleClick}>Okay, got it!</button>
          </div>
          <div className='panel-image'>
            <img src={WindowCleaning} alt='Image of clean windows' />
          </div>
          <p className='panel-text'>
            When we clean windows, we go to town! We make sure each window is
            thoroughly cleaned and left smudge-and-smear free. We will clean the
            windows inside, outside, front and back of your property. If
            you&apos;re looking for a professional window cleaner, get in touch
            with Clear Drip today.
          </p>
        </TabContent>
        <TabContent id='tab2' activeTab={activeTab}>
          <div className='panel-image'>
            <img
              src={PressureWashing}
              alt='Image of driveway being pressure washed'
            />
          </div>
          <p className='panel-text'>
            Pressure washing is underrated, possibly because not many of us know
            the benefits of a good clean. Having your outdoor areas cleaned
            regularly will prolong the life of the materials. This is because
            regular pressure washing can help prevent the build-up of
            contaminants that can cause long-term damage to surfaces.
          </p>
        </TabContent>
        <TabContent id='tab3' activeTab={activeTab}>
          <div className='panel-image'>
            <img src={GutterCleaning} alt='Image of roof gutter' />
          </div>
          <p className='panel-text'>
            Gutter cleaning....when was the last time you had yours done? <br />
            Although it&apos;s something that often goes overlooked, our gutters
            play an important role in channelling rainwater from our roof to the
            drainage system. If we don&apos;t look after our gutters, we could
            be left gutted!
          </p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
