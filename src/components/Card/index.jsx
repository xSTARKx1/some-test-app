import React from 'react';

import avatar from '../../assets/images/photo-cover.svg';

import './index.scss';

const Card = (props) => {
  const { name, email, phone, position, photo = avatar } = props.user;
  return (
    <div className='card-wrapper'>
      <div className='card-info'>
        <img
          src={photo}
          loading='lazy'
          alt='user avatar'
          className='user-image'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = avatar;
          }}
        />
        <div className='field-wrapper name-wrapper'>
          <h3 className='name'>{name}</h3>
          <span>{name}</span>
        </div>

        <div className='field-wrapper'>
          <p className='position'>{position}</p>
          <span>{position}</span>
        </div>
        <div className='field-wrapper'>
          <p className='email'>{email}</p>
          <span>{email}</span>
        </div>
        <div className='field-wrapper'>
          <p className='number'>{phone}</p>
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
