import React from 'react';

import classes from './AboutCard.module.css';

const Card = (props) => {
  return (
    <div
      className={`card text-center align-items-center card-container ${classes['card--custom']} ${classes['card-container--custom']}`}
    >
      <div className={`card-body ${classes['card-body--custom']}`}>
        {props.body}
        <img
          src={props.imgSrc}
          className='card-img-top'
          alt={props.alt}
        />
        <h3 className='card-title'>{props.title}</h3>
        <h6 className={`card-subtitle ${classes['card-subtitle--custom']}`}>
          {props.subtitle}
        </h6>
        <p className='card-text'>{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
