import React from 'react';
// import { Link, Route} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* <Link className='cards__item__link' to={props.path}> */}
        <a
          href={props.path}
          className="cards_item_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Project View'
                src={props.src}
                path={props.src}
              />
{/*             
              window.location.href = 'https://google.com';
              return null;
            }} />   */}

            {/* </a> */}
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
