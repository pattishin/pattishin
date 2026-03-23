
const authorReducer = (state = { authors: [], error: null }, action) => {
  switch (action.type) {
    case 'GET_AUTHOR_SUCCESS':
      return { authors: action.payload, error: null };
    case 'GET_AUTHOR_FAILURE':
      return { authors: state.authors, error: action.payload };
    default:
      return state;
  }
}

export default authorReducer;
