const quizzes = require('./quizzes.json')

//node.js
const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
}

// console.log(findAllQuizzes())
// console.log(findQuizById('123'))

//mongoDB
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}