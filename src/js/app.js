const questionContainers = document.querySelectorAll(".question-container");

for (let i = 0; i < questionContainers.length; i++) {
  questionContainers[i].onclick = showAnswer;
}

function showAnswer(event) {
  const container = event.target.closest(".question-and-answer-container");
  container.classList.toggle("collapsed");
  container.classList.toggle("expanded");
}
