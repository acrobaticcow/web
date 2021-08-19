let giphyAPI = "HM8lbUfeZmcf9R16UHJGDCfgzfCGHutJ";

let check = console.log("success");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("document").on("DOMContentLoaded", initialize());

function initialize() {
  $(`[type = "submit"]`).on("click", (ev) => {
    ev.preventDefault();
    let str = $(`[type = "search"]`).val().trim();
    const searchResult = fetch(
      `http://api.giphy.com/v1/gifs/search?q=${str}&api_key=${giphyAPI}&limit=4`
    )
      .then((response) => response.json())
      .then((response) => {
        let collums = Array.from(document.querySelectorAll(".col-3"));
        let imgURLs = response.data.map((el) => el.images.downsized.url);
        collums.forEach(col => {
          for (let url of imgURLs) {
            let img = document.createElement("img");
            img.src = `${url}`;
            col.appendChild(img);
            imgURLs.shift();
            document.querySelector("#search").value = "";
            break;
            
          }

        })
        
      })
      .catch((err) => console.error(err));
  });
}

$(`[type = "reset"]`).on("click", () => {
  $(`.row`).empty();
});
