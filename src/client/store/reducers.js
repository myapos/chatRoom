import * as actions from './actions';

const reducer = (state = {}, action) => {
  const {
    type,
    data,
    meta,
    firstname,
    lastname,
    previousData,
    idleInterval,
    tick,
    who,
    reference,
    usersRef,
    newEntry,
    loggedUsers,
  } = action;

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

      // eslint-disable-next-line no-case-declarations
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
        isLoggedIn: true,
        firstScreen: false,
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
      };

    case actions.SAGAS_EXIT:
      return {
        ...state,
        firstname: '',
        lastname: '',
        loggedUsers: [],
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

    case actions.SET_IDLE_INTERVAL:
      return {
        ...state,
        idleInterval,
      };

    case actions.SET_IDLE_TICK_TIMER:
      return {
        ...state,
        tick,
      };

    case actions.RESET_IDLE_TICK_TIMER:
      return {
        ...state,
        tick: 0,
      };

    case actions.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        firstScreen: false,
      };

    case actions.WHO_IS_TYPING:
      return {
        ...state,
        who,
      };

    case actions.LOGGED_USERS:
      return {
        ...state,
        loggedUsers,
      };
    case actions.REF_DB:
      return {
        ...state,
        reference,
        usersRef,
        newEntry,
      };

    default:
      return state;
  }
};

export default reducer;
