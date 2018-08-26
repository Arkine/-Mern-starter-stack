const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../config.js')
});

mongoose.connect(`${process.env.db.uri}/${process.env.db.name}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
    console.log(`There was an error connecting to the DB: ${err}`);
});

const app = require('./server/src');

const app = require('./src/app');
const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on port ${server.address().port}`);
});


app.listen(process.env.port || 8080, () => {
    console.log(`App is now listening on port ${app.address().port}`);
});

module.exports = app;