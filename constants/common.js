// export const SERVER_PORT = process.env.PORT ? 5000 : 3000;

// export const CLIENT_PORT = process.env.PORT ? 2222 : 1234;
// export const BASE_URL = process.env.PORT
//   ? 'https://chatroomsimpledemo.herokuapp.com/' : 'http://localhost';

const common = {};

common.CLIENT_PORT = process.env.PORT ? 2222 : 1234;
common.SERVER_PORT = process.env.PORT ? 5000 : 3000;
common.BASE_URL = process.env.PORT
  ? 'https://chatroomsimpledemo.herokuapp.com/' : 'http://localhost';

module.exports = common;
