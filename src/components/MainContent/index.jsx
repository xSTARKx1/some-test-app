import React from 'react';

import { Banner, CardList } from '../index';

import './index.scss';

const MainContent = () => {
  return (
    <div className='main-wrapper'>
      <div className='container'>
        <Banner />
        <CardList />
      </div>
    </div>
  );
};

export default MainContent;
