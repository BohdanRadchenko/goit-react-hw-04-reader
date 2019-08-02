import React, { Component } from 'react';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import publication from '../assets/publications.json';

class Reader extends Component {
  state = {
    indexValue: 1,
    items: publication,
  };

  componentDidMount() {
    if (localStorage.getItem('indexValue')) {
      const index = localStorage.getItem('indexValue');
      this.setState({
        indexValue: JSON.parse(index),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { indexValue } = this.state;
    if (prevState !== this.state) {
      localStorage.setItem('indexValue', JSON.stringify(indexValue));
    }
  }

  hendleDecrement = () => {
    const { indexValue } = this.state;
    if (indexValue > 1) {
      this.setState(state => ({
        indexValue: state.indexValue - 1,
      }));
    }
  };

  hendleIncrement = () => {
    const { indexValue, items } = this.state;
    if (indexValue < items.length) {
      this.setState(state => ({
        indexValue: state.indexValue + 1,
      }));
    }
  };

  render() {
    const { indexValue, items } = this.state;
    const emptyData = items.length === 0;

    return (
      <>
        {!emptyData && (
          <div className={styles.reader}>
            <Publication
              title={items[indexValue - 1].title}
              text={items[indexValue - 1].text}
            />
            <Counter itemsLength={items.length} indexValue={indexValue} />
            <Controls
              className={styles.controls}
              indexValue={indexValue}
              itemsLength={items.length}
              hendleIncrement={this.hendleIncrement}
              hendleDecrement={this.hendleDecrement}
            />
          </div>
        )}
        {emptyData && (
          <div>
            <p>Empty data base</p>
          </div>
        )}
      </>
    );
  }
}

export default Reader;
