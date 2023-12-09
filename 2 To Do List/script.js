const inputBox = document.querySelector("#input-box");
const buttonEl = document.querySelector(".row button");
const listContainer = document.querySelector("#list-container");

buttonEl.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert(`You must write something`);
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "✖️";
  li.appendChild(span);

  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }

  if (e.target.tagName == "SPAN") {
    e.target.closest("li").remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
