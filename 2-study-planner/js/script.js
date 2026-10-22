// Exam Week Board
// A simple study to-do list. Tasks are saved in localStorage.

var tasks = [];

// try/catch so a broken or blocked storage never crashes the page
try {
  var savedTasks = JSON.parse(localStorage.getItem("examTasks"));
  if (Array.isArray(savedTasks)) {
    tasks = savedTasks;
  }
} catch (err) {
  tasks = [];
}

var taskText = document.getElementById("taskText");
var subject = document.getElementById("subject");
var dueDate = document.getElementById("dueDate");
var level = document.getElementById("level");
var board = document.getElementById("board");
var counter = document.getElementById("counter");

function save() {
  try {
    localStorage.setItem("examTasks", JSON.stringify(tasks));
  } catch (err) {
    // storage full or blocked, the board still works for this visit
  }
}

// checks if the due date is before today
function isLate(dateString) {
  if (!dateString) return false;
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var due = new Date(dateString);
  return due < today;
}

function draw() {
  board.innerHTML = "";
  var pending = 0;

  tasks.forEach(function (t, index) {
    var note = document.createElement("div");
    note.className = "note " + t.level;
    if (t.done) {
      note.className += " done";
    } else {
      pending++;
    }

    var subj = document.createElement("div");
    subj.className = "subj";
    subj.textContent = t.subject || "General";

    var text = document.createElement("div");
    text.className = "text";
    text.textContent = t.text;

    var due = document.createElement("div");
    due.className = "due";
    if (t.date) {
      due.textContent = "Due: " + t.date;
      if (isLate(t.date) && !t.done) {
        due.textContent += " (late!)";
        due.className += " late";
      }
    } else {
      due.textContent = "No deadline";
    }

    var buttons = document.createElement("div");
    buttons.className = "buttons";

    var doneBtn = document.createElement("button");
    doneBtn.textContent = t.done ? "Undo" : "Done";
    doneBtn.onclick = function () {
      tasks[index].done = !tasks[index].done;
      save();
      draw();
    };

    var delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.onclick = function () {
      tasks.splice(index, 1);
      save();
      draw();
    };

    buttons.appendChild(doneBtn);
    buttons.appendChild(delBtn);

    note.appendChild(subj);
    note.appendChild(text);
    note.appendChild(due);
    note.appendChild(buttons);
    board.appendChild(note);
  });

  if (tasks.length === 0) {
    counter.textContent = "Board is empty. Add your first task!";
  } else {
    counter.textContent = pending + " left, " + (tasks.length - pending) + " finished";
  }
}

document.getElementById("addBtn").onclick = function () {
  if (taskText.value.trim() === "") {
    alert("Write what you want to study first");
    return;
  }

  tasks.push({
    text: taskText.value.trim(),
    subject: subject.value.trim(),
    date: dueDate.value,
    level: level.value,
    done: false
  });

  save();
  draw();

  taskText.value = "";
  subject.value = "";
  dueDate.value = "";
  taskText.focus();
};

// pressing enter in the task box also adds it
taskText.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});

draw();
