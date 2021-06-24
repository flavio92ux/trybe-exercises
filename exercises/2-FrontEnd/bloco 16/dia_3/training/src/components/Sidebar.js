import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie as selectedMovieActionCreator } from '../actions';

class Sidebar extends Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <div key={ 1 }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ 1 }>
                  {movie.title}
                  was released in
                  {movie.released}
                  <button
                    type="button"
                    onClick={ () => selectMovie(category, movie) }
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movies.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (selectedCategory, selectedMovie) => dispatch(
    selectedMovieActionCreator(selectedCategory, selectedMovie),
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);