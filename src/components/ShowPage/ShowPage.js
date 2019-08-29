// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import styles from './ShowPage.module.css';

import actions from '../../actions';

class ShowPage extends Component {
  componentDidMount() {
    const {
      showRequest,
      match: {
        params: { id }
      }
    } = this.props;

    showRequest(id);
  }

  render() {
    const {
      isFetching,
      entities,
      match: {
        params: { id }
      }
    } = this.props;

    if (isFetching) {
      return <p>Загрузка</p>;
    }

    const ourShow = entities.find(ent => ent.id.toString() === id);

    if (!ourShow) {
      return null;
    }

    const { name, image, summary, cast } = ourShow;

    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className={styles.cast}>
          {cast.map(({ id, name, image }) => (
            <div key={id} className="t-person">
              <p>{name}</p>
              {image && <img src={image} alt={name} />}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isFetching: state.shows.isFetching,
    entities: state.shows.entities
  }),
  {
    showRequest: actions.shows.request
  }
)(ShowPage);