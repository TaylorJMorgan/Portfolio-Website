import React from 'react';

import classes from './SkillBar.module.css';

const Skillbar = (props) => {
  return (
    <div className={classes['skill-bar__outer-bar']}>
      <div
        className={classes['skill-bar__inner-bar']}
        style={{ width: props.width }}
      >
        <div className={classes['skill-bar__skill-name']}>
          {props.skillName}
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
