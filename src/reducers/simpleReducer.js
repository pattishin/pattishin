
const simpleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION': {
      console.log(action.payload);
      return {
        result: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default simpleReducer;
