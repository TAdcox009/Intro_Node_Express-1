const express = require('express');
const app = express();
const expbs = require('express-handlebar');



app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

// Routing
app.get('',  () => {

});

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});