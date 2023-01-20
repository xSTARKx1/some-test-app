import React from 'react';

import Logo from '../../assets/images/Logo.svg';

import './index.scss';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='header-container'>
        <img src={Logo} alt='site_logo' />
        <div className='buttons-wrapper'>
          <button className='button'>Users</button>
          <button className='button'>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
