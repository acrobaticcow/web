const button = document
  .querySelector("#user")
  .addEventListener("click", loadUser);

  
function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=2", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);

      let output = "";
      for (let i in users.data) {
        output += `<div class="user col-3">
        <h3 class = 'text-center'>${users.data[i].first_name} ${users.data[i].last_name}</h3>
        <p>${users.data[i].email}</p>
        <img src="${users.data[i].avatar}" alt="#"></img>
    </div>`;
      }
      document.querySelector(".post").innerHTML = output;
    }
  };

  xhr.send();
}

