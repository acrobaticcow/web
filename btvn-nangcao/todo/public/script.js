const btnCancel = document.querySelector(".btn-cancel");
const btnAdd = document.querySelector(".btn-add");
const todoInput = document.querySelector(".todo-input");

// Lấy dữ liệu từ in put.
let todos = await fetch("/todos").then((response) => response.json());

(function render() {
  todos.forEach(
    (task) =>
      (document.querySelector(".todo-list").innerHTML += `
        <div class="d-flex justify-content-between">
          <p>
          ${task.task}
          </p>
          <button data-doc = "${task.id}" data-delete><i class="bi bi-x-circle-fill"></i></button>
        </div>
      </div>
      `)
  );
})();

function x () {

}

const btnDel = document.querySelector("[data-delete]");

function addTask() {
  let newTodos = {
    title: "Công việc mới",
    completed: false,
    task: todoInput.value,
  };

  fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodos),
  })
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(".todo-list").innerHTML += `
      <div class="d-flex justify-content-between">
        <p>
        ${response.task} 
        </p>
        <button data-doc = "${response.id}" data-delete><i class="bi bi-x-circle-fill"></i></button>
      </div>
    </div>
    `;
    });
  reset();
}

function deleteTask() {
  fetch(`/todos/${btnDel.dataset.doc}`, {
    method: "DELETE",
  })
    .then(() => {
      document.querySelector(
        `[data-doc = "${btnDel.dataset.doc}"]`
      ).parentElement.innerHTML = "";
    });
}
function reset() {
  todoInput.value = "";
}

btnAdd.addEventListener("click", addTask);
btnCancel.addEventListener("click", reset);
document.querySelector(
  `[data-doc = "${btnDel.dataset.doc}"]`
).addEventListener("click", deleteTask);
