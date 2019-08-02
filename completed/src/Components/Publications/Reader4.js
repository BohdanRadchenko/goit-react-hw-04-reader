// import React, { Component } from 'react';
// import queryString from 'query-string';
// import ReactRouterPropTypes from 'react-router-prop-types';
// import styles from './Publications.module.css';
// import Publication from './Publication';
// import Counter from '../Controls/Counter';
// import Controls from '../Controls/Controls';
// import publications from '../../resources/publications.json';

// const START_PAGE = 1;

// const getItemFromLocation = location =>
//   Number(queryString.parse(location.search).item);

// export default class Reader extends Component {
//   static propTypes = {
//     location: ReactRouterPropTypes.location.isRequired,
//     history: ReactRouterPropTypes.history.isRequired,
//   };

//   state = {
//     index: START_PAGE,
//   };

//   componentDidMount() {
//     const { location, history } = this.props;

//     const searchNum = getItemFromLocation(location);

//     console.log(searchNum);

//     if (searchNum > publications.length || searchNum <= 0 || !searchNum) {
//       return history.replace({
//         ...location,
//         search: `item=${START_PAGE}`,
//       });
//     }

//     this.setState({ index: searchNum });
//     return history.push({
//       ...location,
//       search: `item=${searchNum}`,
//     });
//   }

//   componentDidUpdate(prevProps) {
//     const { location, history } = this.props;
//     const searchNum = getItemFromLocation(location);

//     console.log(searchNum);

//     if (searchNum > publications.length || searchNum <= 0 || !searchNum) {
//       return history.replace({
//         ...location,
//         search: `item=${START_PAGE}`,
//       });
//     }

//     if (prevProps.location.search !== location.search) {
//       const searchNum = getItemFromLocation(location);
//       /* eslint-disable-next-line */
//       this.setState({ index: searchNum });
//     }
//   }

//   handleChangeArticle = action => {
//     switch (action) {
//       case 'forward':
//         this.setState(state => ({ index: state.index + 1 }));
//         this.changeSearch('forward', this.state.index);
//         break;
//       case 'back':
//         this.setState(state => ({ index: state.index - 1 }));
//         this.changeSearch('back', this.state.index);
//         break;
//       default:
//         break;
//     }
//   };

//   changeSearch = (action, num) => {
//     const { location, history } = this.props;
//     switch (action) {
//       case 'forward':
//         history.push({
//           ...location,
//           search: `item=${num + 1}`,
//         });
//         break;
//       case 'back':
//         history.push({
//           ...location,
//           search: `item=${num - 1}`,
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   render() {
//     const { index } = this.state;

//     return (
//       <div className={styles.reader}>
//         <Publication publication={publications[index - 1]} />
//         <Counter items={publications} count={index} />
//         <Controls
//           disabledUp={index === publications.length}
//           disabledDown={index === START_PAGE}
//           handleChangeArticle={this.handleChangeArticle}
//         />
//       </div>
//     );
//   }
// }
