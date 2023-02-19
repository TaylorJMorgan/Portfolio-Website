// import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className='text-center mt-5'>
      <div
        className='spinner-border'
        style={{ width: '5rem', height: '5rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
