const Express = require('express');

const app = new Express();

// Where our static files are served from
app.use("/static", express.static(path.join(__dirname, '../../build/static')));

// Because routing is done client-side, we want to always serve the index.html file
app.get('*', req, res => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});
