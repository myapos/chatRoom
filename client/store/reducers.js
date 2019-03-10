import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type, data, received } = action;

  switch (type) {
    case actions.INITIALIZATION:
      return {
        ...state,
      };

    case actions.ENTRY:
      return {
        ...state,
        data
      };
    case actions.RECEIVED_DATA:
      return {
        ...state,
        received
      };
    default:
      return state;
  }
};

export default reducer;