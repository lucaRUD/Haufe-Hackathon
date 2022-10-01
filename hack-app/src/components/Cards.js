import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Wraps!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cardwrap.jpg'
              text='Find the best wrapping to fit your car at exellent quality and excellent price'
              label='Wrapping'
              path='/wrapping'
            />
            <CardItem
              src='images/cartint.jpg'
              text='Tinting done as it should be with a variety of options to choose from'
              label='Tinting'
              path='/tinting'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vansticker.jpg'
              text='We can print and apply any type of sticker on any car with YOUR BUSINESS on it. '
              label='Branding'
              path='/branding'
            />
            <CardItem
              src='images/buysellcars.jpg'
              text='We offer a variety of cars for sale at very affordable prices depending on your need and budget!'
              label='Buying'
              path='/buycar'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
