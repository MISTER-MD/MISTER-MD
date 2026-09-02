const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
    res.send('🚀 MISTER MD is online!');
});

const pairRouter = require('./main');
app.use('/', pairRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${port}`);
});

module.exports = app;
