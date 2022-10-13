import React from 'react';

import { motion } from 'framer-motion';
import classes from './MotionWrapper.module.css';

const MotionWrapper = (props) => {
  return (
    <motion.div
      initial={{ y: -window.innerHeight }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.5 } }}
      className={classes[props.backgroundType]}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionWrapper;
