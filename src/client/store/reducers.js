import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type, data, meta, firstname, lastname } = action;

  switch (type) {
    case actions.INITIALIZATION:
      return {
        ...state,
      };

    case actions.ENTRY:
      return {
        ...state,
        data,
      };
    case actions.RECEIVED_DATA:
      state.received.push(meta);

      const newValues = [...state.received];

      return {
        ...state,
        received: newValues,
      };

    case actions.ENTER:
      debugger;
      return {
        ...state,
        firstname,
        lastname,
        entered: firstname !== '' || lastname !== '',
      };
    default:
      return state;
  }
};

export default reducer;
