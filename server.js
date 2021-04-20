const express = require('express')
const app = express()

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whiteboard-2',
//     {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://jiazhentang:19921209@cluster0.yfkph.mongodb.net/quizDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

//configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)
// require('./controllers/quizzes-controller')(app)
// require('./controllers/questions-controller')(app)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(4000)