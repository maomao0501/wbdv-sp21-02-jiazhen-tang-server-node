const questionsDao = require('../daos/questions-dao')

const findAllQuestions = () => questionsDao.findAllQuestions()

const findQuestionById = (qid) => questionsDao.findQuestionById(qid)

const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)

module.exports = {
    findAllQuestions, findQuestionById, findQuestionsForQuiz
}
//
//
//
// const questions = require('./questions.json')
//
// const questionsModel = require("../models/questions/questions-model")
//
// // const createQuestion = () => {}
// //
// // const createQuestionForQuiz = () => {}
//
// const findAllQuestions = () => {
//     return questionsModel.find()
//     // return questions
// }
//
// const findQuestionForQuiz = (qzid) => {
//     return questionsModel.find({quizId: qzid})
//     // return questions.filter((question) => {
//     //     return question.quizId === qzid
//     // })
// }
//
// const findQuestionById = (quid) => {
//     return questions.find((question) => {
//         return question._id === quid
//     })
// }
//
// // const updateQuestion = () => {}
// //
// // const deleteQuestion = () => {}
//
// module.exports = {
//     // createQuestion,
//     findAllQuestions, findQuestionById, findQuestionForQuiz
//     // updateQuestion, deleteQuestion,
//     // createQuestionForQuiz,
// }