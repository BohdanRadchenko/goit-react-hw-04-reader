import React from 'react';
import PropTypes from 'prop-types';

import styles from './Controls.module.css';

const Controls = ({ handleChangeArticle, disabledNext, disabledBack }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="back"
      className={styles.button}
      onClick={e => handleChangeArticle(e)}
      disabled={disabledBack}
    >
      Назад
    </button>
    <button
      type="button"
      name="forward"
      className={styles.button}
      onClick={e => handleChangeArticle(e)}
      disabled={disabledNext}
    >
      Вперед
    </button>
  </section>
);

Controls.defaultProps = {
  disabledNext: false,
  disabledBack: false,
};

Controls.propTypes = {
  handleChangeArticle: PropTypes.func.isRequired,
  disabledNext: PropTypes.bool,
  disabledBack: PropTypes.bool,
};

export default Controls;
