const character = [
  { name: "ambitny", color: "red" },
  { name: "analityczny", color: "blue" },
  { name: "analizujący ryzyka", color: "blue" },
  { name: "bezpośredni", color: "yellow" },
  { name: "bezstronny", color: "blue" },
  { name: "celowy", color: "red" },
  { name: "ceniący dane", color: "blue" },
  { name: "ceniący indywidualną pracę", color: "blue" },
  { name: "ceniący wiedzę", color: "blue" },
  { name: "ciepły", color: "green" },
  { name: "czarujący", color: "yellow" },
  { name: "decyzyjny", color: "red" },
  { name: "delegujący", color: "red" },
  { name: "doceniający innych", color: "green" },
  { name: "dociekliwy", color: "blue" },
  { name: "dostosowujący się", color: "green" },
  { name: "dusza towarzystwa", color: "yellow" },
  { name: "dynamiczny", color: "red" },
  { name: "dyplomatyczny", color: "red" },
  { name: "efektywny", color: "red" },
  { name: "empatyczny", color: "green" },
  { name: "energetyczny", color: "yellow" },
  { name: "entuzjastyczny", color: "yellow" },
  { name: "formalny", color: "blue" },
  { name: "hojny", color: "green" },
  { name: "innowacyjny", color: "yellow" },
  { name: "inspirujący", color: "yellow" },
  { name: "instynktowny", color: "yellow" },
  { name: "intuicyjny", color: "yellow" },
  { name: "kreatywny", color: "yellow" },
  { name: "łagodzący konflikty", color: "green" },
  { name: "logiczny", color: "blue" },
  { name: "lojalny", color: "green" },
  { name: "lubiący małe kroki", color: "green" },
  { name: "lubiący spokój", color: "green" },
  { name: "lubiący sprawdzone rozwiązania", color: "green" },
  { name: "lubiący wyzwania", color: "red" },
  { name: "metodyczny", color: "blue" },
  { name: "nadający ton", color: "red" },
  { name: "nastawiony na atmosferę", color: "yellow" },
  { name: "nastawiony na bezpieczeństwo", color: "green" },
  { name: "nastawiony na dokładność", color: "blue" },
  { name: "nastawiony na działanie", color: "red" },
  { name: "nastawiony na innych ludzi", color: "green" },
  { name: "nastawiony na nowe", color: "yellow" },
  { name: "nastawiony na wygraną", color: "red" },
  { name: "nieschematyczny", color: "yellow" },
  { name: "opanowany", color: "blue" },
  { name: "optymistyczny", color: "yellow" },
  { name: "oryginalny", color: "yellow" },
  { name: "ostrożny", color: "blue" },
  { name: "oszczędny", color: "blue" },
  { name: "pedantyczny", color: "blue" },
  { name: "pewny siebie", color: "red" },
  { name: "pionierski", color: "red" },
  { name: "podchodzący z dystansem", color: "blue" },
  { name: "pomocny", color: "green" },
  { name: "poukładany", color: "blue" },
  { name: "praktyczny", color: "red" },
  { name: "przestrzegający zasad", color: "blue" },
  { name: "przewodzący", color: "red" },
  { name: "przyspieszający", color: "red" },
  { name: "rozsądny", color: "blue" },
  { name: "rozważający za i przeciw", color: "blue" },
  { name: "rozwiązyjący problemy", color: "blue" },
  { name: "rywalizujący", color: "red" },
  { name: "rzetelny", color: "green" },
  { name: "skoncentrowany na celu", color: "red" },
  { name: "spontaniczny", color: "yellow" },
  { name: "szybki", color: "red" },
  { name: "towarzystki", color: "yellow" },
  { name: "twardy", color: "red" },
  { name: "uczuciowy", color: "green" },
  { name: "umiejący załatwiać", color: "yellow" },
  { name: "wesoły", color: "yellow" },
  { name: "wielowątkowy", color: "yellow" },
  { name: "wizjonerski", color: "red" },
  { name: "wprowadzający harmonię", color: "green" },
  { name: "wprowadzający reguły", color: "blue" },
  { name: "wspierający", color: "green" },
  { name: "współpracujący", color: "green" },
  { name: "wykonujący", color: "green" },
  { name: "wystawny", color: "yellow" },
  { name: "zachwycony sobą", color: "yellow" },
  { name: "zaplanowany", color: "green" },
  { name: "zdeterminowny", color: "red" },
  { name: "zorganizowany", color: "green" },
  { name: "życzliwy", color: "green" },
];

//consts
const StartButton = document.getElementById("start-btn");
const StartPage = document.querySelector(".start");
const QuestionsContainer = document.querySelector(".container");
const AnswerButton = document.querySelector("button");
const Body = document.querySelector("body");
const statistics = document.querySelector(".stats");
const quentionQty = 22;
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

Body.addEventListener("onload", OnOpenPage());

function OnOpenPage() {
  LoadResult();
}

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
    greensquare.style.height = `${
      (greenList.length / quentionQty) * maxHeight
    }px`;
    if (greenList.length > 0) {
      greensquare.innerText = greenList.length;
    }

    const redsquare = document.querySelector(".red");
    redsquare.style.height = `${(redList.length / quentionQty) * maxHeight}px`;
    if (redList.length > 0) {
      redsquare.innerText = redList.length;
    }

    const bluesquare = document.querySelector(".blue");
    bluesquare.style.height = `${
      (blueList.length / quentionQty) * maxHeight
    }px`;
    if (blueList.length > 0) {
      bluesquare.innerText = blueList.length;
    }

    const yellowsquare = document.querySelector(".yellow");
    yellowsquare.style.height = `${
      (yellowList.length / quentionQty) * maxHeight
    }px`;
    if (yellowList.length > 0) {
      yellowsquare.innerText = yellowList.length;
    }
  }
}
