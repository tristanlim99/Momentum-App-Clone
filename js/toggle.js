let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let enterKey = document.getElementById("addToDo");

addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
//Enter key
var input = document.getElementById("inputField");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addToDo").click();
  }
});
//toggle button
function myFunction() {
  let x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
