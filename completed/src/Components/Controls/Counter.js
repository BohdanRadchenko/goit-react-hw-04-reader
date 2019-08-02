import React from 'react';
import PropTypes from 'prop-types';

import styles from './Controls.module.css';

const Counter = ({ count, items }) => (
  <>
    <p className={styles.counter}>
      {count}/{items.length}
    </p>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Counter;
