export const INITIALIZATION = 'INITIALIZATION';

export const ENTRY = 'ENTRY';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const ENTER = 'ENTER';

export const EXIT = 'EXIT';

export const SET_USER_INFO = 'SET_USER_INFO';

export const SET_PREVIOUS_DATA = 'SET_PREVIOUS_DATA';

export const SET_IDLE_TIMER = 'SET_IDLE_TIMER';
export const RESET_IDLE_TIMER = 'RESET_IDLE_TIMER';

export const entryChange = data => ({
  type: ENTRY,
  data,
});

export const receivedData = meta => ({
  type: RECEIVED_DATA,
  meta,
});

export const enter = (firstname, lastname) => ({
  type: ENTER,
  firstname,
  lastname,
});

export const exit = () => ({
  type: EXIT,
});

export const setUserInfo = (firstname, lastname) => ({
  type: SET_USER_INFO,
  firstname,
  lastname,
});

export const setPreviousData = previousData => ({
  type: SET_PREVIOUS_DATA,
  previousData,
});
