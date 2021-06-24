import { connect } from 'react-redux';
import React, { Component } from 'react';

class Player extends Component {
  render() {
    const { selectedCategory, selectedMovie } = this.props;
    return (
      <div>
        <h1>
          {selectedMovie.title}
        </h1>
        <h3>
          {selectedCategory.name}
          {' '}
          -
          {' '}
          {selectedMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ selectedMovie.link }
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
  selectedCategory: state.movies.selectedCategory,
})

export default connect(mapStateToProps, null)(Player);