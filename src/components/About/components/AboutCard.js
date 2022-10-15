import React from 'react';

import classes from './AboutCard.module.css';
import Card from 'react-bootstrap/Card';

const AboutCard = (props) => {
  return (
    <Card className='text-center'>
      <Card.Img
        variant='top'
        src={props.imgSrc}
        alt={props.alt}
      />
      <Card.Body>
        {props.body}
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className={`${classes['card-subtitle--custom']} mb-3`}>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
