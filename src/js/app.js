const questionContainer = document.querySelectorAll(".question-container");

for (let i = 0; i < questionContainer.length; i++) {
  questionContainer[i].onclick = showAnswer;
}

function showAnswer(event) {
  const container = event.target.closest(".question-and-answer-container");
  container.classList.toggle("collapsed");
  container.classList.toggle("expanded");
}
