//Require the library
const mongoose = require('mongoose');

//connect to db
mongoose.connect(process.env.MONGO_URI, {
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