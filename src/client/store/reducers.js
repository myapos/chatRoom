import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type, data, meta, firstname, lastname, previousData } = action;

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

      localStorage.setItem('received', JSON.stringify(newValues));
      localStorage.setItem('firstname', state.firstname);
      localStorage.setItem('lastname', state.lastname);

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
      localStorage.setItem('firstname', '');
      localStorage.setItem('lastname', '');
      localStorage.setItem('entered', 'false');

      return {
        ...state,
        received: [],
        entered: '',
        firstname: '',
        lastname: '',
      };

    case actions.SET_USER_INFO:

      return {
        ...state,
        firstname,
        lastname,
      };

    case actions.SET_PREVIOUS_DATA:

      return {
        ...state,
        received: previousData,
      };

    default:
      return state;
  }
};

export default reducer;
