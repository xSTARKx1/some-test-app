import React from 'react';

import avatar from '../../assets/images/photo-cover.svg';

import './index.scss';

const Card = (props) => {
  const { name, email, phone, position, photo = avatar } = props.user;
  return (
    <div className='card-wrapper'>
      <div className='card-info'>
        <img src={photo} alt='user avatar' className='user-image' />
        <h3 className='name'>{name}</h3>
        <p className='position'>{position}</p>
        <p className='email'>{email}</p>
        <p className='number'>{phone}</p>
      </div>
    </div>
  );
};

export default Card;
