import React from 'react';
import './Header.css';
import { images} from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
   <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Restaurant (Latin: restauro)
      <br /> a catering establishment with a wide variety of difficult-to-prepare dishes, including take-out and signature dishes.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.welcome} />
   </div>
  </div>
);

export default Header;
