const firebase = require('firebase');

firebase.initializeApp({
  databaseURL: 'https://graphql-node.firebaseio.com',
  serviceAccount: './graphql-node-credentials.json'
});

const db = firebase.database();

let ref = db.ref("server/saving-data/fireblog");
var usersRef = ref.child("users");

usersRef.set({
  1: {
    name: "Lovisa",
    nickname: "applegrain"
  },
  2: {
    name: "Trey",
    nickname: "snarkfest"
  }
});

export default db;
