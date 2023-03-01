//Require the library
const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost:27017/issue_tracker_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});

//acquire the connection of check if it is successful
const db = mongoose.connection;

//Error
db.on('error', console.error.bind(console, 'error connecting to db'));

//Connected
db.once('open', function () {
    console.log('connected to db');
})