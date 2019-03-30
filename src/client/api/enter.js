const APIKEY = process.env.APIKEY;
const AUTHDOMAIN = process.env.AUTHDOMAIN;
const DATABASEURL = process.env.DATABASEURL;
const PROJECTID = process.env.PROJECTID;
const STORAGEBUCKET = process.env.STORAGEBUCKET;
const MESSANGINSSENDERID = process.env.MESSANGINSSENDERID;

const app
  = firebase
  && firebase.initializeApp({
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSANGINSSENDERID,
  });

const enter = action => {
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
