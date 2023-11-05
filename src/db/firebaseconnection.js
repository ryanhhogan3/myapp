var admin = require("firebase-admin");


var serviceAccount = require("./key.json");


admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

  databaseURL: "https://finlabapi-default-rtdb.firebaseio.com"

});

console.log(admin)