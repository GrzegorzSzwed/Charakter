const character = [
  { name: "żywiołowy", color: "yellow" },
  { name: "zrelaksowany", color: "green" },
  { name: "zdeterminowany", color: "red" },
  { name: "zapobiegliwy", color: "blue" },
  { name: "wymagający", color: "red" },
  { name: "wyciszony", color: "green" },
  { name: "wspierający", color: "green" },
  { name: "władczy", color: "red" },
  { name: "uprzejmy", color: "green" },
  { name: "troskliwy", color: "green" },
  { name: "spontaniczny", color: "yellow" },
  { name: "spokojny", color: "green" },
  { name: "towarzyski", color: "yellow" },
  { name: "skrupulatny", color: "blue" },
  { name: "rywalizujący", color: "red" },
  { name: "ruchliwy", color: "yellow" },
  { name: "rozważny", color: "blue" },
  { name: "radosny", color: "yellow" },
  { name: "przekonujący", color: "yellow" },
  { name: "precyzyjny", color: "blue" },
  { name: "porywczy", color: "red" },
  { name: "pomocny", color: "green" },
  { name: "pewny siebie", color: "red" },
  { name: "otwarty", color: "yellow" },
  { name: "ostrożny", color: "blue" },
  { name: "opiekuńczy", color: "green" },
  { name: "operatywny", color: "red" },
  { name: "oficjalny", color: "blue" },
  { name: "obiektywny", color: "blue" },
  { name: "o silnej woli", color: "red" },
  { name: "niezłomny", color: "red" },
  { name: "nastawiony na cel", color: "red" },
  { name: "entuzjastyczny", color: "yellow" },
  { name: "empatyczny", color: "green" },
  { name: "ekspresyjny", color: "yellow" },
  { name: "ekspansywny", color: "yellow" },
  { name: "dynamiczny", color: "yellow" },
  { name: "dosadny", color: "red" },
  { name: "dokładny", color: "blue" },
  { name: "dociekliwy", color: "blue" },
  { name: "cierpliwy", color: "green" },
  { name: "analizujący", color: "blue" },
  { name: "nienarzucający się", color: "green" },
];

//consts
const StartButton = document.getElementById("start-btn");
const StartPage = document.querySelector(".start");
const QuestionsContainer = document.querySelector(".container");
const AnswerButton = document.querySelector("button");
let question = 0;

//listeners
StartButton.addEventListener("click", function (event) {
  event.preventDefault();
  StartPage.style.display = "none";
  LoadQuestion();
});

function LoadQuestion() {
  //Create div
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  //Create list
  const iam = document.createElement("h1");
  iam.innerText = "Jestem";

  const characterItem = document.createElement("h2");
  characterItem.innerText = character[question].name;

  const answers = document.createElement("div");
  answers.classList.add("answer");

  const yesbtn = document.createElement("button");
  yesbtn.innerText = "Tak";
  yesbtn.addEventListener("click", function (e) {
    Next(e.target.innerText);
    questionDiv.remove();
  });
  const nobtn = document.createElement("button");
  nobtn.addEventListener("click", function (e) {
    Next(e.target.innerText);
    questionDiv.remove();
  });
  nobtn.innerText = "Nie";

  answers.appendChild(yesbtn);
  answers.appendChild(nobtn);

  questionDiv.appendChild(iam);
  questionDiv.appendChild(characterItem);
  questionDiv.appendChild(answers);

  QuestionsContainer.appendChild(questionDiv);
}

function Next(answer) {
  if (answer === "Tak") {
    saveLocalAnswers(character[question]);
  }
  if (question === character.length - 1) {
    LoadResult();
  } else {
    question++;
    LoadQuestion();
  }
}

function saveLocalAnswers(answer) {
  let answers;
  if (localStorage.getItem("answers") === null) {
    answers = [];
  } else {
    answers = JSON.parse(localStorage.getItem("answers"));
  }
  answers.push(answer);
  localStorage.setItem("answers", JSON.stringify(answers));
}

function LoadResult() {
  //Create div
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  //Create list
  const result = document.createElement("h1");
  result.innerText = "Twój wynik to:";

  const answers = JSON.parse(localStorage.getItem("answers"));
  const greenList = answers.filter((answer) => answer.color === "green");
  console.log(greenList);
  const blueList = answers.filter((answer) => answer.color === "blue");
  console.log(blueList);
  const redList = answers.filter((answer) => answer.color === "red");
  const yellowList = answers.filter((answer) => answer.color === "yellow");

  const green = document.createElement("h2");
  green.innerText = `zielony: ${greenList.length}`;
  const red = document.createElement("h2");
  red.innerText = `czerwony: ${redList.length}`;
  const blue = document.createElement("h2");
  blue.innerText = `niebieski: ${blueList.length}`;
  const yellow = document.createElement("h2");
  yellow.innerText = `żółty: ${yellowList.length}`;

  questionDiv.appendChild(result);
  questionDiv.appendChild(green);
  questionDiv.appendChild(red);
  questionDiv.appendChild(yellow);
  questionDiv.appendChild(blue);

  QuestionsContainer.appendChild(questionDiv);
}
