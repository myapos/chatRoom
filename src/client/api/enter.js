import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAej6ah5FpsE1N3eqDsKTUcDA9zfHK6zCY',
  authDomain: 'chatroomsimpledemo.firebaseapp.com',
  databaseURL: 'https://chatroomsimpledemo.firebaseio.com',
  projectId: 'chatroomsimpledemo',
  storageBucket: 'chatroomsimpledemo.appspot.com',
  messagingSenderId: '327710006605',
});

const enter = async action => {
  let reference,
    usersRef,
    newEntry = {};
  try {
    const db = app.firebase_.database();
    console.log('db', db);

    reference = db.ref('chatroomsimpledemo');

    // keep reference in redux status for later use
    usersRef = reference.child('users');

    newEntry = usersRef.push({
      firstname: action.firstname,
      lastname: action.lastname,
      status: 'active',
    });
  } catch (e) {
    console.log('error', e);
  }

  return {
    reference,
    usersRef,
    newEntry,
  };
};

export default enter;
