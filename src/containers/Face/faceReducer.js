function faceReducer(state = {}, action) {
  switch (action.type) {
    case "SET_LOCATION_SEARCH":
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
export default faceReducer;
