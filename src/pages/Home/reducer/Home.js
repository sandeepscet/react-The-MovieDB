import ActionTypes from './../../../actions/index';

const initial_state = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  recentMovies: [],
  isLoading: true,
  isError: false
};

const Reducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Reducer;
