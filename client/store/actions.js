export const INITIALIZATION = 'INITIALIZATION';

export const ENTRY = 'ENTRY';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const entryChange = data => ({
  type: ENTRY,
  data
});

export const receivedData = received => ({
  type: RECEIVED_DATA,
  received
});