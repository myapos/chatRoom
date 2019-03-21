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

      debugger;

      let newValues;
      if (typeof state.received.length === 'undefined') {
        // eslint-disable-next-line no-case-declarations
        newValues = [...state.received];
      } else {
        newValues = state.received;
      }

      localStorage.setItem('received', JSON.stringify(newValues));
      return {
        ...state,
        received: newValues,
      };

    case actions.ENTER:

      // eslint-disable-next-line no-case-declarations
      const hasEntered = firstname !== '' || lastname !== '';
      localStorage.setItem('entered', hasEntered);

      return {
        ...state,
        firstname,
        lastname,
        entered: hasEntered,
      };
    case actions.EXIT:

      localStorage.setItem('received', '[]');
      localStorage.setItem('entered', 'false');

      return {
        ...state,
        received: [],
        entered: '',
        firstname: '',
        lastname: '',
      };

    default:
      return state;
  }
};

export default reducer;
