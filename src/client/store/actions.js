export const INITIALIZATION = 'INITIALIZATION';

export const ENTRY = 'ENTRY';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const ENTER = 'ENTER';

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
