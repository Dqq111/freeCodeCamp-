const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },

  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },

  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionText = document.querySelector(".question");
const optionsBlock = document.querySelector(".options");
const nextBtn = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  removeBtns();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionText.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    // removeBtns();
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("option");
    optionsBlock.append(button);

    // if (answer.correct)
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);
  });
}

function removeBtns() {
  nextBtn.style.display = "none";
  while (optionsBlock.firstChild) {
    optionsBlock.removeChild(optionsBlock.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  if (!selectedBtn) return;

  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  }

  if (selectedBtn.dataset.correct === "false")
    selectedBtn.classList.add("incorrect");

  // console.log(Array.from(optionsBlock.children));
  Array.from(optionsBlock.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");

    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextQuestion();
  } else {
    startQuiz();
  }
});

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  removeBtns();
  questionText.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = `Play Again`;
  nextBtn.style.display = "block";
}

// removeBtns();
startQuiz();
