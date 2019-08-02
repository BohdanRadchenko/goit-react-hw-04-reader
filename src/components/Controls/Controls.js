import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  hendleDecrement,
  hendleIncrement,
  indexValue,
  itemsLength,
}) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        name="buttonPrev"
        onClick={hendleDecrement}
        disabled={indexValue === 1}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        name="buttonNext"
        onClick={hendleIncrement}
        disabled={indexValue === itemsLength}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  hendleDecrement: PropTypes.func.isRequired,
  hendleIncrement: PropTypes.func.isRequired,
  indexValue: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
};

export default Controls;
