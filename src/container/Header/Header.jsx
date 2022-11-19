import React from 'react';
import './Header.css';
import { images} from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app_header app_wrapper section_padding' id="home">
   <div className='app_wrapper_info'>
      <SubHeading />
   </div>
   <div className='app_wrapper_img'>

   </div>
  </div>
);

export default Header;
