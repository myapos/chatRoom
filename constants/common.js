// export const SERVER_PORT = process.env.PORT ? 5000 : 3000;

// export const CLIENT_PORT = process.env.PORT ? 2222 : 1234;
// export const BASE_URL = process.env.PORT
//   ? 'https://chatroomsimpledemo.herokuapp.com/' : 'http://localhost';

const common = {};

common.CLIENT_PORT = process.env.NODE_ENV === 'development' ? 1234 : 2222;
common.SERVER_PORT = process.env.NODE_ENV === 'development' ? 3000 : 5000;
common.BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost' : 'https://chatroomsimpledemo.herokuapp.com/';

module.exports = common;
