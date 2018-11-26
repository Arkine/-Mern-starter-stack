const Express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new Express();

const Routes = require('./routes');

app.use(cors());

app.use(Express.urlencoded({
    extended: true,
}));

// Convert resp to json
app.use(Express.json());

// Routing
app.use('/', Routes);

// Where our static files are served from
app.use("/static", Express.static(path.join(__dirname, '../../build/static')));

// Because routing is done client-side, we want to always serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = app;