export const INITIALIZATION = 'INITIALIZATION';

export const ENTRY = 'ENTRY';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const ENTER = 'ENTER';

export const EXIT = 'EXIT';

export const SET_USER_INFO = 'SET_USER_INFO';

export const SET_PREVIOUS_DATA = 'SET_PREVIOUS_DATA';

export const WHO_IS_TYPING = 'WHO_IS_TYPING';

/* IDLE ACTIONS */

export const SET_IDLE_TICK_TIMER = 'SET_IDLE_TICK_TIMER';

export const SET_IDLE_INTERVAL = 'SET_IDLE_INTERVAL';

export const RESET_IDLE_TICK_TIMER = 'RESET_IDLE_TICK_TIMER';

export const LOGGED_OUT = 'LOGGED_OUT';

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

export const setIdleTickTimer = tick => ({
  type: SET_IDLE_TICK_TIMER,
  tick,
});

export const setIdleInterval = idleInterval => ({
  type: SET_IDLE_INTERVAL,
  idleInterval,
});

export const resetIdleTickTimer = () => ({
  type: RESET_IDLE_TICK_TIMER,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});

export const whoIsTyping = who => ({
  type: WHO_IS_TYPING,
  who,
});
