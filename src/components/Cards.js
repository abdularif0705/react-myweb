import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import Video from 'react-native-video';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <a href='https://ctl2.uwindsor.ca/vidlinks/95106DD5AD55E590.html'></a> */}
            <CardItem
              src='../images/img-9.jpg'
              text='First person shooter Capture the Flag game made using Unity and C#'
              label='Sci-Fi'
              path='https://ctl2.uwindsor.ca/vidlinks/95106DD5AD55E590.html'
            />
            {/* <Video
              source={{ url: 'https://ctl2.uwindsor.ca/vidlinks/95106DD5AD55E590.html' }}
            /> */}
            {/* <a/> */}
            <CardItem
              src='../images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='../images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='../images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
