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
  let ref,
    usersRef,
    newEntry = {};
  try {
    const db = app.firebase_.database();
    console.log('db', db);

    ref = db.ref('chatroomsimpledemo');

    // keep ref in redux status for later use
    usersRef = ref.child('users');

    newEntry = usersRef.push({
      firstname: action.firstname,
      lastname: action.lastname,
      status: 'active',
    });
  } catch (e) {
    console.log('error', e);
  }

  return {
    ref,
    usersRef,
    newEntry,
  };
};

export default enter;
