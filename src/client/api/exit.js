const exit = newEntry => {
  try {
    // delete entry from firebase
    newEntry
      && newEntry.remove(error => {
        alert(error ? 'Uh oh!' : 'Success!');
      });
  } catch (e) {
    console.log('error', e);
  }
};

export default exit;
