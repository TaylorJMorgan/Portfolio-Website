import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes['footer']}>
      <p className={classes['footer__text']}>
        Copyright Taylor Morgan,{' '}
        <span className={classes['footer__text--highlight']}>
          {currentYear}
        </span>
      </p>
    </div>
  );
};

export default Footer;
