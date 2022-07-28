/*
MongoDB server setup on Mac Terminal:
/Users/marcosf/Applications/mongodb/bin/mongod --dbpath=/Users/marcosf/Applications/mongodb-data

MongoDB Atlas:
user: marcosf
password: YEcyFkjxekktzexn
conn string: mongodb+srv://marcosf:<password>@cluster0.s1xtm.mongodb.net/test
*/

//npm module
const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/smartwill");
