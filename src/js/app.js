const questionContainer = document.querySelectorAll(".question-container button");

for (let i = 0; i < questionContainer.length; i++) {
  questionContainer[i].onclick = showAnswer;
}

function showAnswer(event) {
  const container = event.target.parentElement.parentElement;
  container.classList.toggle("collapsed");
  container.classList.toggle("expanded");
}
