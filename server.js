const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.post('/survey', (req, res) => {
    console.log(req.body);
});

app.engine( 'hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Server is running on port:8080');
});