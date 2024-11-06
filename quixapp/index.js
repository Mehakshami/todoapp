const questions = [
    {
        question: "Which built-in method returns the calling string value converted to upper case in Java?",
        options: ["toUpperCase()", "toLowerCase()", "charAt()", "concat()"],
        answer: 0 
    },
    {
        question: "Which method is used to compare two strings in Java?",
        options: ["equals()", "compare()", "==", "compareTo()"],
        answer: 0 
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<src>", "<script>"],
        answer: 3 
    },
    {
        question: "Which keyword is used to define a class in Java?",
        options: ["class", "define", "new", "struct"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsElement.innerHTML += `
            <div>
                <input type="radio" name="option" id="option${index}" value="${index}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

loadQuestion();

