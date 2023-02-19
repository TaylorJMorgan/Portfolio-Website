import React from 'react';

// import classes from './AboutCard.module.css';
import Card from 'react-bootstrap/Card';

const AboutCard = (props) => {
  return (
    <Card className='text-center'>
      <Card.Img
        variant='top'
        src={props.imgSrc}
        alt={props.alt}
      />
      <Card.Body className='d-flex flex-column'>
        {props.body}
        <Card.Title className='mt-auto fs-4'>{props.title}</Card.Title>
        <Card.Subtitle className='mb-3'>{props.subtitle}</Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
