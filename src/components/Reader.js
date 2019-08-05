/*eslint-disable*/
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import publication from '../assets/publications.json';

const getPage = location =>
  Math.floor(Number(queryString.parse(location.search).page));

class Reader extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  state = {
    indexValue: 1,
    items: publication,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const { indexValue, items } = this.state;
    const parsePage = getPage(location);
    if (parsePage >= 0 && parsePage <= items.length) {
      this.setState({
        indexValue: parsePage,
      });
    }
    history.replace({
      ...location,
      search: `page=${indexValue}`,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, location } = this.props;
    const { indexValue } = this.state;
    const parsedPage = getPage(location);
    if (prevState !== this.state) {
      history.push({
        ...location,
        search: `page=${indexValue}`,
      });
    }
    if (prevState.indexValue !== parsedPage) {
      this.setState({
        indexValue: parsedPage,
      });
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
