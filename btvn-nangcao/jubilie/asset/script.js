const tagCheckbox = document.querySelectorAll(".content-inner input");
    

tagCheckbox.forEach((el) => {
  el.addEventListener("change", () => {
    if (el.checked) console.log("a");
    else console.log("b");
  });
});

console.log(document.querySelector("#weight-100"));