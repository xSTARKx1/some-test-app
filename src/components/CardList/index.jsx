import React from 'react';

import { Card } from '../index';

import './index.scss';

const CardList = () => {
  return (
    <section className='card-list-section'>
      <h2 className='card_list-title'>Working with GET request</h2>
      <div className='card-list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='button-wrapper'>
        <button className='button'>Show more</button>
      </div>
    </section>
  );
};

export default CardList;
