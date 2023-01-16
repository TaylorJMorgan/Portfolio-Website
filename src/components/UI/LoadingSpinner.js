import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className='text-center mt-5'>
      <div className={classes['lds-ellipsis']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
