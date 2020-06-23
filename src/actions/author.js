
export const getAuthor = () => dispatch => {
    const baseUrl = (
      process.env.NODE_ENV === 'development'
        ? `${process.env.REACT_APP_BASE_URL}/api/author`
        : '/api/author'
    );

    return fetch(baseUrl, { method: 'GET' })
      .then(res => res.json())
      .then(authors => {
        dispatch({ type: 'GET_AUTHOR_SUCCESS', payload: authors });
      })
      .catch(err => {
        dispatch({ type: 'GET_AUTHOR_FAILURE', payload: err });
      });
}
