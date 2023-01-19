import React from 'react';

import './index.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content-wrapper'>
        <h1 className='title'>Test assignment for front-end developer</h1>
        <h2 className='sub-title'>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </h2>
        <button className='button'>Sign up</button>
      </div>
    </div>
  );
};

export default Banner;
