const Express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new Express();

app.use(cors());

app.use(Express.urlencoded({
    extended: true,
}));

app.use(Express.json());

// Where our static files are served from
app.use("/static", Express.static(path.join(__dirname, '../../build/static')));

// Because routing is done client-side, we want to always serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = app;