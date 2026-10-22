// Report Card Calculator
// Takes marks of each subject and finds total, percentage and grade

var rows = document.getElementById("rows");

// start with 5 empty subjects
var starter = ["Maths", "Science", "English", "Hindi", "Computer"];

function addRow(name) {
  var tr = document.createElement("tr");

  tr.innerHTML =
    '<td><input type="text" class="sub" placeholder="Subject"></td>' +
    '<td><input type="number" class="got" min="0" placeholder="0"></td>' +
    '<td><input type="number" class="max" min="1" value="100"></td>' +
    '<td class="pct">-</td>' +
    '<td class="rm"><button title="Remove">×</button></td>';

  // set the subject name here instead of inside the HTML string
  tr.querySelector(".sub").value = name || "";

  // update the row percentage when typing
  var got = tr.querySelector(".got");
  var max = tr.querySelector(".max");
  var pct = tr.querySelector(".pct");

  function updatePct() {
    var g = parseFloat(got.value);
    var m = parseFloat(max.value);
    if (isNaN(g) || isNaN(m) || m <= 0) {
      pct.textContent = "-";
    } else {
      pct.textContent = ((g / m) * 100).toFixed(0) + "%";
    }
  }
  got.addEventListener("input", updatePct);
  max.addEventListener("input", updatePct);

  tr.querySelector("button").onclick = function () {
    rows.removeChild(tr);
  };

  rows.appendChild(tr);
}

function getGrade(p) {
  if (p >= 90) return "A+";
  if (p >= 80) return "A";
  if (p >= 70) return "B";
  if (p >= 60) return "C";
  if (p >= 50) return "D";
  if (p >= 35) return "E";
  return "F";
}

function calculate() {
  var gots = document.querySelectorAll(".got");
  var maxs = document.querySelectorAll(".max");

  var totalGot = 0;
  var totalMax = 0;
  var failedSubjects = 0;
  var counted = 0;

  for (var i = 0; i < gots.length; i++) {
    var g = parseFloat(gots[i].value);
    var m = parseFloat(maxs[i].value);

    if (isNaN(g)) continue; // skip empty rows

    if (isNaN(m) || m <= 0 || g > m || g < 0) {
      alert("Row " + (i + 1) + " has wrong marks. Please check it.");
      return;
    }

    totalGot += g;
    totalMax += m;
    counted++;

    // below 35% in a subject means fail in that subject
    if ((g / m) * 100 < 35) {
      failedSubjects++;
    }
  }

  if (counted === 0) {
    alert("Enter marks for at least one subject");
    return;
  }

  var percent = (totalGot / totalMax) * 100;
  var grade = getGrade(percent);

  var name = document.getElementById("studentName").value.trim();
  document.getElementById("resultName").textContent = name ? "Result for " + name : "Your Result";
  document.getElementById("total").textContent = totalGot + " / " + totalMax;
  document.getElementById("percent").textContent = percent.toFixed(2) + "%";
  document.getElementById("grade").textContent = grade;

  var status = document.getElementById("status");
  var remark = document.getElementById("remark");

  if (failedSubjects > 0) {
    status.textContent = "FAIL";
    status.className = "fail";
    remark.textContent = "You are below 35% in " + failedSubjects + " subject(s). Focus on those and try again.";
  } else {
    status.textContent = "PASS";
    status.className = "pass";
    if (percent >= 75) {
      remark.textContent = "Excellent work, keep it up!";
    } else if (percent >= 60) {
      remark.textContent = "Good result. A little more practice will push you higher.";
    } else {
      remark.textContent = "You passed. Revise the weak topics to improve next time.";
    }
  }

  document.getElementById("result").className = "";
}

for (var i = 0; i < starter.length; i++) {
  addRow(starter[i]);
}

document.getElementById("addRow").onclick = function () {
  addRow("");
};
document.getElementById("calc").onclick = calculate;
