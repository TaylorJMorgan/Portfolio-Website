import React from 'react';

// import classes from './ResumeCard.module.css';
import Card from 'react-bootstrap/Card';

const ResumeCard = (props) => {
  return (
    <Card className='text-center'>
      <Card.Body className='d-flex flex-column'>
        {props.body}
        <Card.Title className='mt-auto fs-4'>Looking for my Resume?</Card.Title>
        <Card.Text>
          Check it out right{' '}
          <a href='https://docs.google.com/document/d/e/2PACX-1vQaile7er0u020BMan6Kd2wDNuaQRWrSjNFDVpn2_yGiLWkiqyzfJ7R4zmPoBhMhxC-HWKLAdw4EVli/pub'>
            here.
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResumeCard;
