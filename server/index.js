const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../variables.env')
});

mongoose.connect(`${process.env.DB}`, {
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
	console.log(`There was an error connecting to the DB: ${err}`);
	process.exit(1);
});

const app = require('./src');
const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on port ${server.address().port}`);
});