import React from 'react';

import classes from './SocialButton.module.css';

const SocialButton = (props) => {
  return (
    <a href={props.href}>
      <div className={classes['social-container']}>{props.icon}</div>
    </a>
  );
};

export default SocialButton;
