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
const Body = document.querySelector("body");
const statistics = document.querySelector(".stats");
let question = 0;
const maxHeight = 300;

//listeners
StartButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.removeItem("answers");
  StartPage.style.display = "none";
  statistics.style.display = "none";
  LoadQuestion();
});

Body.addEventListener("onload", LoadResult());

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
  if (localStorage.getItem("answers") != null) {
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

    statistics.style.display = "flex";

    const greensquare = document.querySelector(".green");
    greensquare.style.height = `${(greenList.length / 11) * maxHeight}px`;
    if (greenList.length > 0) {
      greensquare.innerText = greenList.length;
    }

    const redsquare = document.querySelector(".red");
    redsquare.style.height = `${(redList.length / 11) * maxHeight}px`;
    if (redList.length > 0) {
      redsquare.innerText = redList.length;
    }

    const bluesquare = document.querySelector(".blue");
    bluesquare.style.height = `${(blueList.length / 11) * maxHeight}px`;
    if (blueList.length > 0) {
      bluesquare.innerText = blueList.length;
    }

    const yellowsquare = document.querySelector(".yellow");
    yellowsquare.style.height = `${(yellowList.length / 11) * maxHeight}px`;
    if (yellowList.length > 0) {
      yellowsquare.innerText = yellowList.length;
    }
  }
}
