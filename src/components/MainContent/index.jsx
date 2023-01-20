import React from 'react';

import { Banner, CardList, SignUpForm } from '../index';

import './index.scss';

const MainContent = () => {
  return (
    <div className='main-wrapper'>
      <div className='container'>
        <Banner />
        <CardList />
        <SignUpForm />
      </div>
    </div>
  );
};

export default MainContent;
