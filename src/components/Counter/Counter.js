import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ itemsLength, indexValue }) => {
  return (
    <div className={styles.counter}>
      <p className={styles.counter}>
        {indexValue}/{itemsLength}
      </p>
    </div>
  );
};

Counter.propTypes = {
  itemsLength: PropTypes.number.isRequired,
  indexValue: PropTypes.number.isRequired,
};

export default Counter;
