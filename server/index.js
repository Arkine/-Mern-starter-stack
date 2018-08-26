const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../variables.env')
});
console.log("PROCESS HRERE", process.env.MODE)
mongoose.connect(`${process.env.DB}`);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
    console.log(`There was an error connecting to the DB: ${err}`);
});

const app = require('./src');
const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on port ${server.address().port}`);
});

module.exports = app;