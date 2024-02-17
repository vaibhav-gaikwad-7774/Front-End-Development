const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;



const questions = {
    {
        question: 'which one of the javascript framework?'
        answers: [
            {text: 'python',correct: false}
            {text: 'jango',correct: false}
            {text: 'react',correct: true}
            {text: 'eclipse',correct: false}
        ]
    }
}