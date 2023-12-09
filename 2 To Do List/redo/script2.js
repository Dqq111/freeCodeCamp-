const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector(".row button");
const listContainer = document.querySelector(".list-container");

addButton.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert(`Please add a task`);
    return;
  }

  //creating new li element
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  //Adding into list container
  listContainer.appendChild(li);

  //creating new element for the close button 'x'
  let span = document.createElement("span");
  span.innerHTML = `❌`;
  li.appendChild(span);

  //clearing input box
  inputBox.value = "";
  savaData();
});

listContainer.addEventListener("click", (e) => {
  // console.log(e.tar/get);

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savaData();
  }

  if (e.target.tagName === "SPAN") {
    e.target.closest("li").remove();
    savaData();
  }
});

function savaData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
