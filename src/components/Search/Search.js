// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import ShowPreview from '../ShowPreview';

import styles from './Search.module.css';

class Search extends Component {
  state = {
    inputValue: ''
  };

  handleChange = evt => {
    const {
      target: { value }
    } = evt;
    this.setState({
      inputValue: value
    });
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    const { inputValue } = this.state;

    searchRequest(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    const { isFetching, searchResult } = this.props;

    return isFetching ? (
      <p>Выполняется поиск</p>
    ) : (
      <Fragment>
        <div className={styles.previewList}>
          <input
            className={`${styles.input} t-input`}
            value={inputValue}
            placeholder="Название сериала"
            onChange={this.handleChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={`${styles.searchPanel} t-search-result`}>
          {searchResult.map(show => (
            <ShowPreview key={show.id} {...show} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    searchResult: state.search.result,
    isFetching: state.search.isFetching
  }),
  {
    searchRequest: actions.search.request
  }
)(Search);