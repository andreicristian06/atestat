const quizData = [
  {
      question: "Care echipă de Formula 1 a câștigat cele mai multe campionate mondiale de constructori?",
      options: ["A. Ferrari", "B. McLaren", "C. Mercedes"],
      answer: "A"
  },
  {
      question: "Care este cel mai titrat pilot din istoria Formula 1",
      options: ["A. Michael Schumacher", "B. Lewis Hamilton", "C. Ayrton Senna"],
      answer: "B"
  },
  {
      question: "În ce an a fost fondată Formula 1?",
      options: ["A. 1946", "B. 1965", "C. 1950"],
      answer: "C"
  },
  {
      question: "Care este circuitul considerat cel mai lung din calendarul F1?",
      options: ["A. Circuit de Monaco", "B. Circuit de Spa-Francorchamps", "C. Circuit de Monza"],
      answer: "B"
  },
  {
      question: "Cine a fost primul pilot de Formula 1 care a câștigat un campionat mondial?",
      options: ["A. Juan Manuel Fangio", "B. Alberto Ascari", "C. Giuseppe Farina"],
      answer: "C"
  },
  {
      question: "În care an a fost introdus sistemul de punctaj actual în Formula 1?",
      options: ["A. 2010", "B. 1990", "C. 2021"],
      answer: "A"
  },
  {
      question: "Ce anume este DRS (Drag Reduction System) în Formula 1?",
      options: ["A. Un tip de pneuri", "B. Un sistem care reduce forța de rezistență a aerului", "C. Un sistem de siguranță pentru mașini"],
      answer: "B"
  },
  {
      question: "Cine este cunoscut sub numele de 'Regele Monaco'?",
      options: ["A. Ayrton Senna", "B. Michael Schumacher", "C. Lewis Hamilton"],
      answer: "A"
  },
  {
      question: "Care este recordul pentru cele mai multe pole positions într-o carieră în Formula 1?",
      options: ["A. 68", "B. 100", "C. 104"],
      answer: "C"
  },
  {
      question: "Ce echipă a fost fondată de coloniștii britanici în 1966 și a câștigat 8 titluri mondiale de constructori?",
      options: ["A. Lotus", "B. Williams", "C. Red Bull Racing"],
      answer: "B"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById('quizContainer');
  const questionData = quizData[currentQuestionIndex];

  quizContainer.innerHTML = `
      <div class="question">
          <p>${currentQuestionIndex + 1}. ${questionData.question}</p>
          ${questionData.options.map((option, index) => `
              <label>
                  <input type="radio" name="question" value="${String.fromCharCode(65 + index)}"> ${option}
              </label><br>
          `).join('')}
      </div>
  `;

  updateResult();
}

function updateResult() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Întrebarea ${currentQuestionIndex + 1} din ${quizData.length}. Răspunsuri corecte: ${score}`;
}

function nextQuestion() {
  const userAnswer = document.querySelector('input[name="question"]:checked');
  if (userAnswer) {
      if (userAnswer.value === quizData[currentQuestionIndex].answer) {
          score++;
      }
      currentQuestionIndex++;
      
      if (currentQuestionIndex < quizData.length) {
          loadQuestion();
      } else {
          showFinalScore();
      }
  } else {
      alert("Te rugăm să selectezi un răspuns!");
  }
}

function showFinalScore() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = `<h2>Ai raspuns corect la ${score} din ${quizData.length}!</h2>`;
  document.getElementById('nextButton').style.display = 'none';
}

document.getElementById('nextButton').addEventListener('click', nextQuestion);

loadQuestion();
document.getElementById('nextButton').style.display = 'block';
function showFinalScore() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = <h2>Ai raspuns corect la ${score} din ${quizData.length}!</h2>;
  document.getElementById('nextButton').style.display = 'none';
}

document.getElementById('nextButton').addEventListener('click', nextQuestion);

loadQuestion();
document.getElementById('nextButton').style.display = 'block';