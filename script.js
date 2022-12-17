const quizData = [
    {
        question: "Who invented coca-cola",
        a: "Caleb Bradham",
        b: "Charles Alderton",
        c: "Joth Stith",
        d: "Bob Stiller",
        correct: "c",
    },
    {
        question: "Which of the following countries was first to use a symbol for zero?",
        a: "Japan",
        b: "United Kingdom",
        c: "China",
        d: "India",
        correct: "d",
    },
    {
        question: "Who invented dynamite?",
        a: "Alfred Nobel",
        b: "Orville Wright",
        c: "Alexander Graham Bell",
        d: "Mustafa Kemel",
        correct: "a",
    },
    {
        question: "Which animal has 32 brain?",
        a: "Cat",
        b: "Tiger",
        c: "Leeches",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which is the national vegetable of India?",
        a: "pumpkin",
        b: "potato",
        c: "tapioca",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year was ISRO lauched?",
        a: "1896",
        b: "1997",
        c: "1984",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who invented vaccine?",
        a: "Duffel Quahave",
        b: "Noot T Issac",
        c: "Edward Jenner",
        d: "Alexander Fleming",
        correct: "c",
    },
    {
        question: "How many weeks are there in a year?",
        a: "76",
        b: "43",
        c: "90",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "Which is the longest river in India?",
        a: "Periyar",
        b: "Ganga",
        c: "Kaveri",
        d: "none of the above",
        correct: "b",
    }

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
   
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})