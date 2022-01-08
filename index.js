const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, (req, res) => {
    console.log('running on port 3000');
});