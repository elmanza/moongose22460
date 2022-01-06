

let admin = require("firebase-admin");

let serviceAccount = require("./config/comision22460-firebase-adminsdk-qodid-3e8c3f6ebf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


module.exports = { db };