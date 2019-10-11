const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.use(express.static('public'))

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/',  (req, res) => {
    res.render('index', { layout: false });
});

app.get('/ghost',  (req, res) => {
    res.render('ghost', { layout: false });
});

app.get('/fairy',  (req, res) => {
    res.render('fairy', { layout: false });
});

app.get('/psychic',  (req, res) => {
    res.render('psychic', { layout: false });
});

app.get('/fire',  (req, res) => {
    res.render('fire', { layout: false });
});

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});