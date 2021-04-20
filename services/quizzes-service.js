const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes()

const findQuizById = (qid) => quizzesDao.findQuizById(qid)

module.exports = {
    findAllQuizzes, findQuizById
}





// const quizzes = require('./quizzes.json')
//
// const quizzesModel = require("../models/quizzes/quizzes-model")
//
// //node.js
// const findAllQuizzes = () => {
//     // return quizzes
//     return quizzesModel.find()
// }
//
// const findQuizById = (quizId) => {
//     return quizzesModel
//         .findById(quizId)
//         .populate("questions")
//         .exec()
//     // return quizzesModel.find({_id: quizId})
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // })
// }
//
// // console.log(findAllQuizzes())
// // console.log(findQuizById('123'))
//
// //mongoDB
// // const createQuiz = () => {}
// // const updateQuiz = () => {}
// // const deleteQuiz = () => {}
//
// module.exports = {
//     // createQuiz,
//     findAllQuizzes, findQuizById,
//     // updateQuiz, deleteQuiz
// }