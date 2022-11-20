import React from 'react';
import './SpecialMenu.css';
import { SubHeading , MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading  title="Menu that fits you palatte"/>
        <h1 className="headtext__cormorant"> Today's Special</h1>
     </div> 
     {/* wine menu & beer */}
     <div className='app__specialMenu-menu'>
       <div className='app__specialMenu-menu_wine  flex__center'>
          <p className='app__specialMenu_heading'>Wine & Beer</p>
          <div className="app__spacialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <p>{wine.title}</p>
            ))}
          </div>
       </div>

       {/* wine image */}

       <div className='app__specialMenu-menu_img'>
          <img src={images.menu}  alt="menu img" />
       </div>
     
       {/* Cocktails */}
       <div className='app__specialMenu-menu_cocktails  flex__center'>
          <p className='app__specialMenu_heading'>Cocktails</p>
          <div className="app__spacialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <p>{cocktail.title}</p>
            ))}
          </div>
       </div>

     </div>
  </div>
);

export default SpecialMenu;
