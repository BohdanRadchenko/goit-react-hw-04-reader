import React, { Component } from 'react';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Publications.module.css';
import Publication from './Publication';
import Counter from '../Controls/Counter';
import Controls from '../Controls/Controls';
import publications from '../../resources/publications.json';

const START_PAGE = 1;

const getItemFromLocation = location =>
  Math.floor(Number(queryString.parse(location.search).item));
export default class Reader extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;

    const searchNum = getItemFromLocation(location);

    if (searchNum > publications.length || searchNum < 1 || !searchNum) {
      return history.replace({
        ...location,
        search: `item=${START_PAGE}`,
      });
    }

    return history.push({
      ...location,
      search: `item=${searchNum}`,
    });
  }

  componentDidUpdate() {
    const { location, history } = this.props;
    const searchNum = getItemFromLocation(location);

    if (searchNum > publications.length || searchNum < 1 || !searchNum) {
      history.replace({
        ...location,
        search: `item=${START_PAGE}`,
      });
    }
  }

  handleChangeArticle = ({ target: { name } }) => {
    const { location, history } = this.props;
    const searchNum = getItemFromLocation(location);

    if (name === 'forward') {
      history.push({ ...location, search: `item=${searchNum + 1}` });
    }

    if (name === 'back') {
      history.push({ ...location, search: `item=${searchNum - 1}` });
    }
  };

  render() {
    const { location } = this.props;
    const searchNum = getItemFromLocation(location);
    const index =
      searchNum > publications.length || searchNum < 1 || !searchNum
        ? START_PAGE
        : searchNum;
    const publication = publications[index - 1];

    return (
      <div className={styles.reader}>
        <Publication publication={publication} />
        <Counter items={publications} count={index} />
        <Controls
          disabledNext={index === publications.length}
          disabledBack={index === START_PAGE}
          handleChangeArticle={this.handleChangeArticle}
        />
      </div>
    );
  }
}
