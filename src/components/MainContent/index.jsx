import React, { useState } from 'react';

import { Banner, CardList, SignUpForm, SuccessMessage } from '../index';

import './index.scss';

const MainContent = () => {
  const [isUserCreated, setIsUserCreated] = useState(false);
  return (
    <main className='main-wrapper'>
      <div className='container'>
        <Banner />
        <CardList />
        {isUserCreated ? (
          <SuccessMessage />
        ) : (
          <SignUpForm setIsUserCreated={setIsUserCreated} />
        )}
      </div>
    </main>
  );
};

export default MainContent;
