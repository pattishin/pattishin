
const authorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_AUTHOR_SUCCESS': 
      return {
        authors: action.payload
      };
    case 'GET_AUTHOR_FAILURE': 
      return {
        author_error: action.payload
      };
    default: {
      return state;
    }
  }
}

export default authorReducer;
