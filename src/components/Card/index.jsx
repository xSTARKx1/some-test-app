import React from 'react';

import avatar from '../../assets/images/photo-cover.svg';

import './index.scss';

const Card = () => {
  return (
    <div className='card-wrapper'>
      <div className='card-info'>
        <img src={avatar} alt='user avatar' />
        <h3 className='name'>Takamaru Ayako Jurrien</h3>
        <p className='position'>Lead Independent Director</p>
        <p className='email'>Takamuru@gmail.com</p>
        <p className='number'>+38 (098) 278 90 24</p>
      </div>
    </div>
  );
};

export default Card;
