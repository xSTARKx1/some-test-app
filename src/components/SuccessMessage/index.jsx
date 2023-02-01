import React from 'react';

import successImage from '../../assets/images/success-image.svg';

import './index.scss';

const SuccessMessage = () => {
  return (
    <section className='success-message'>
      <h2 className='title'>User successfully registered</h2>
      <img src={successImage} alt='success' className='success-image' />
    </section>
  );
};

export default SuccessMessage;
