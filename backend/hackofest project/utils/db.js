// db.js

const mongoose = require('mongoose');

const adminDBURI = 'mongodb+srv://lakshyaparashar:jaishreeram04@user.kcm9wmr.mongodb.net/admindb';
const policeDBURI = 'mongodb+srv://lakshyaparashar:jaishreeram04@user.kcm9wmr.mongodb.net/policedb';
const userDBURI = 'mongodb+srv://lakshyaparashar:jaishreeram04@user.kcm9wmr.mongodb.net/userdb';
mongoose.connect(adminDBURI).then(()=>{
  console.log("succesfull setup");
}).catch((err)=>{
  console.log("no connection established")
});
mongoose.connect(policeDBURI).then(()=>{
  console.log("succesfull setup");
}).catch((err)=>{
  console.log("no connection established")
});
mongoose.connect(userDBURI).then(()=>{
  console.log("succesfull setup");
}).catch((err)=>{
  console.log("no connection established")
});



const connectToDBs = async () => {
  try {
    await mongoose.connect(adminDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connected to admin database');

    await mongoose.createConnection(policeDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connected to police database');

    await mongoose.createConnection(userDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connected to user database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectToDBs;
