import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const aboutUs = () => (
  <div className="app__aboutUs app__bg flex__center section__padding" id="about">
    {/* G letter */}
    <div className="app__aboutUs-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutUs-content flex__center">
      {/* about */}
      <div className="app__aboutUs-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
        {/* knife */}
      <div className="app__aboutUs-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
       {/* history */}
      <div className="app__aboutUs-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default aboutUs;
