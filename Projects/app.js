const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('PEPPA PIG');
});

app.listen(3000, () => console.log('Listening on port 3000!'));