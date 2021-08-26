$(function () {
  const tasks = $(".tasks");
  const LOCAL_STORAGE_LIST_KEY = "task.lists";
  const LOCAL_STORAGE_FINISHED_LIST_KEY = "task.finishedLists";
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

  let finishedLists =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_FINISHED_LIST_KEY)) || [];

  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(
      LOCAL_STORAGE_FINISHED_LIST_KEY,
      JSON.stringify(finishedLists)
    );
  }

  function saveAndRender() {
    save();
    render();
  }

  function updateCounter() {
    $(".counter").text(`${lists.length}`);
    $(".f-counter").text(`${finishedLists.length}`);
  }

  function clear(element) {
    element.html("");
  }

  function render() {
    let a;
    let taskId = 0;
    clear(tasks);
    lists.forEach((list) => {
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", `${taskId++}`);
      checkBox.dataset.Listid = checkBox.id;
      tasks.append(checkBox);
      const label = document.createElement("label");
      label.setAttribute("for", `${checkBox.id}`);
      label.textContent = `\xa0${list}`;
      checkBox.after(label);
      tasks.append($("</br>"));
      checkBox.addEventListener("click", () => {
        if (checkBox.checked === true) {
          a = lists.splice(checkBox.id, 1);
          finishedLists.push(a);
          saveAndRender();
        }
      });
    });
    renderFinishedTasks();
    updateCounter();
    console.log(finishedLists);
  }

  render();

  function renderFinishedTasks() {
    clear($(".finished-task-display"));
    if (finishedLists.length < 0) {
      clear($(".finished-task-display"));
      return;
    }
    finishedLists.forEach((task) => {
      const p = document.createElement("p");
      p.textContent = task;
      $(".finished-task-display").append(p);
    });
  }

  $(".delete").on("click", () => {
    localStorage.clear(finishedLists);
    location.reload();
    return false;
  });

  $(".submit").on("click", (ev) => {
    ev.preventDefault();
    let userInput = $(".user-text").val();
    if (
      document.querySelector(".user-text").value == null ||
      document.querySelector(".user-text").value === "" ||
      document.querySelector(".user-text").value.length === 0
    ) {
      return;
    }
    lists.push(userInput);
    $(".user-text").val("");
    saveAndRender();
  });
});
