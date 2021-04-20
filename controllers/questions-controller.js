const questionsService = require('../services/questions-service')

module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions)))
    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}

// module.exports = (app) => {
//     const questionsService = require("../services/questions-service")
//
//     //  /api/questions
//     const findAllQuestions = (req, res) => {
//         questionsService.findAllQuestions()
//             .then((questions) => {
//                 res.send(questions)
//             })
//         // const questions = questionsService.findAllQuestions()
//         // res.send(questions)
//     }
//
//     //  /api/quizzes/:qzid/questions
//     const findQuestionsForQuiz = (req, res) => {
//         const qzid = req.params.qzid
//         const questions = questionsService
//             .findQuestionForQuiz(qzid)
//             .then((questions) => {
//                 res.send(questions)
//             })
//         // const questions = questionsService.findQuestionForQuiz(qzid)
//         // res.send(questions)
//     }
//
//     app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
//     app.get("/api/questions", findAllQuestions)
// }
