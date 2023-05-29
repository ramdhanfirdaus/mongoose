const express = require('express')
const Answer = require('./utils/db')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/answer', (req, res) => {
    res.render('answer');
});

app.post('/answer', async (req, res) => {

    const answer = await Answer.find();

    if (answer.length >= 1) {
        res.render('done', {
            answer: answer[0]
        });

    } else {
        new Answer({answer: req.body.pilihanZefa,}).save();

        if (req.body.pilihanZefa === 'terima') {
            res.render('yes');
        } else {
            res.render('no');
        }
    }

});

app.use('/', (req, res) => {
    res.status(404);
    res.send("<h1>404</h4>")
});

var port = process.env.PORT || 3000;

app.listen(port);