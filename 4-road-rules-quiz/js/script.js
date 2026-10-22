// Road Rules Quiz
// Basic multiple choice quiz using an array of questions

var questions = [
  {
    q: "What does a red traffic light mean?",
    options: ["Slow down and go", "Stop and wait", "Honk and pass", "Turn left only"],
    answer: 1,
    note: "Red always means stop behind the line."
  },
  {
    q: "What should you do when an ambulance with a siren comes from behind?",
    options: ["Speed up", "Ignore it", "Move to the side and give way", "Stop in the middle"],
    answer: 2,
    note: "Emergency vehicles must get a clear path."
  },
  {
    q: "A triangular sign with a red border is usually a...",
    options: ["Warning sign", "Parking sign", "Mandatory sign", "Information sign"],
    answer: 0,
    note: "Triangles warn you about something ahead."
  },
  {
    q: "Which one is a must while riding a two wheeler?",
    options: ["Sunglasses", "Helmet", "Loud horn", "Mobile phone"],
    answer: 1,
    note: "A helmet saves lives, it is required by law."
  },
  {
    q: "What does a zebra crossing mean?",
    options: ["Parking area", "Pedestrians cross here", "Speed breaker ahead", "No entry"],
    answer: 1,
    note: "Slow down and let people cross."
  },
  {
    q: "Using a mobile phone while driving is...",
    options: ["Fine if short", "Fine on empty roads", "Dangerous and not allowed", "Allowed at signals only"],
    answer: 2,
    note: "Even a few seconds of distraction can cause an accident."
  },
  {
    q: "A yellow traffic light means...",
    options: ["Get ready to stop", "Speed up", "Park here", "Go in reverse"],
    answer: 0,
    note: "Yellow is a warning that red is coming."
  },
  {
    q: "What should you do before changing lanes?",
    options: ["Close your eyes", "Use indicator and check mirror", "Honk three times", "Nothing"],
    answer: 1,
    note: "Always signal and check your mirrors first."
  }
];

var current = 0;
var score = 0;

var startScreen = document.getElementById("startScreen");
var quizScreen = document.getElementById("quizScreen");
var endScreen = document.getElementById("endScreen");
var optionsBox = document.getElementById("options");
var feedback = document.getElementById("feedback");
var nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  var item = questions[current];

  document.getElementById("qNumber").textContent = "Question " + (current + 1) + " of " + questions.length;
  document.getElementById("scoreNow").textContent = "Score: " + score;
  document.getElementById("barFill").style.width = (current / questions.length) * 100 + "%";
  document.getElementById("question").textContent = item.q;

  feedback.textContent = "";
  nextBtn.className = "big hidden";
  optionsBox.innerHTML = "";

  for (var i = 0; i < item.options.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = item.options[i];
    btn.setAttribute("data-num", i);
    btn.onclick = checkAnswer;
    optionsBox.appendChild(btn);
  }
}

function checkAnswer(e) {
  var picked = Number(e.target.getAttribute("data-num"));
  var item = questions[current];
  var buttons = optionsBox.querySelectorAll("button");

  // lock all buttons after one click
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  buttons[item.answer].className = "right";

  if (picked === item.answer) {
    score++;
    feedback.textContent = "Correct! " + item.note;
  } else {
    e.target.className = "wrong";
    feedback.textContent = "Wrong. " + item.note;
  }

  document.getElementById("scoreNow").textContent = "Score: " + score;

  if (current === questions.length - 1) {
    nextBtn.textContent = "See result";
  } else {
    nextBtn.textContent = "Next";
  }
  nextBtn.className = "big";
}

function showResult() {
  quizScreen.className = "card hidden";
  endScreen.className = "card";

  document.getElementById("finalScore").textContent = score;

  var msg = document.getElementById("finalMsg");
  if (score >= 7) {
    msg.textContent = "Great! You know your road rules well.";
  } else if (score >= 5) {
    msg.textContent = "Not bad. Read the rules once more and try again.";
  } else {
    msg.textContent = "You need more practice. Please study the road signs and try again.";
  }
}

document.getElementById("startBtn").onclick = function () {
  startScreen.className = "card hidden";
  quizScreen.className = "card";
  current = 0;
  score = 0;
  showQuestion();
};

nextBtn.onclick = function () {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

document.getElementById("againBtn").onclick = function () {
  endScreen.className = "card hidden";
  quizScreen.className = "card";
  current = 0;
  score = 0;
  showQuestion();
};
