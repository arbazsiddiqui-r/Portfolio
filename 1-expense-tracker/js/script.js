// Pocket Money Diary
// Saves entries in the browser's localStorage so they stay after refresh

var entries = [];

// getting the elements from the page
var form = document.getElementById("entryForm");
var titleInput = document.getElementById("title");
var amountInput = document.getElementById("amount");
var typeInput = document.getElementById("type");
var categoryInput = document.getElementById("category");
var filterInput = document.getElementById("filter");
var list = document.getElementById("list");
var emptyMsg = document.getElementById("emptyMsg");
var clearBtn = document.getElementById("clearBtn");

// load old data if there is any
// try/catch so a broken or blocked storage never crashes the page
try {
  var saved = localStorage.getItem("pocketDiary");
  if (saved) {
    var parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      entries = parsed;
    }
  }
} catch (err) {
  entries = [];
}

function saveData() {
  try {
    localStorage.setItem("pocketDiary", JSON.stringify(entries));
  } catch (err) {
    // storage full or blocked, the app still works for this visit
  }
}

function showEntries() {
  list.innerHTML = "";

  var selected = filterInput.value;
  var income = 0;
  var expense = 0;
  var shown = 0;

  for (var i = 0; i < entries.length; i++) {
    var item = entries[i];

    // totals are always for everything, filter only changes the list
    if (item.type === "income") {
      income = income + item.amount;
    } else {
      expense = expense + item.amount;
    }

    if (selected !== "all" && item.category !== selected) {
      continue;
    }

    var li = document.createElement("li");
    li.className = item.type;

    var sign = item.type === "income" ? "+" : "-";

    // textContent is used so symbols like < or " in a title cannot break the page
    var nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = item.title;

    var tagSpan = document.createElement("span");
    tagSpan.className = "tag";
    tagSpan.textContent = item.category;

    var moneySpan = document.createElement("span");
    moneySpan.className = "money";
    moneySpan.textContent = sign + "₹" + item.amount;

    li.appendChild(nameSpan);
    li.appendChild(tagSpan);
    li.appendChild(moneySpan);

    // delete button
    var del = document.createElement("button");
    del.className = "del";
    del.textContent = "×";
    del.setAttribute("data-index", i);
    del.addEventListener("click", deleteEntry);
    li.appendChild(del);

    list.appendChild(li);
    shown++;
  }

  document.getElementById("incomeTotal").textContent = "₹" + income;
  document.getElementById("expenseTotal").textContent = "₹" + expense;
  document.getElementById("balance").textContent = "₹" + (income - expense);

  if (shown === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }
}

function deleteEntry(e) {
  var index = e.target.getAttribute("data-index");
  entries.splice(index, 1);
  saveData();
  showEntries();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var title = titleInput.value.trim();
  var amount = Number(amountInput.value);

  if (title === "" || amount <= 0) {
    alert("Please enter a name and a proper amount");
    return;
  }

  entries.push({
    title: title,
    amount: amount,
    type: typeInput.value,
    category: categoryInput.value
  });

  saveData();
  showEntries();
  form.reset();
});

filterInput.addEventListener("change", showEntries);

clearBtn.addEventListener("click", function () {
  if (entries.length === 0) return;
  var sure = confirm("Delete all entries?");
  if (sure) {
    entries = [];
    saveData();
    showEntries();
  }
});

showEntries();
