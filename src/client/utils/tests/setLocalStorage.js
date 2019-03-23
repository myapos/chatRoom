const setLocalStorage = () => {
  global.localStorage = {
    getItem (key) {
      return this[key];
    },
    setItem (key, value) {
      this[key] = value;
    },
    removeItem (key) {
      delete this[key];
    },
  };
};

export default setLocalStorage;
