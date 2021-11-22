$(function () {
  // set Height cho overflow absoluted content
  function setHeight() {
    var y = 0;
    $("section.payment .container .row > *").each(function () {
      y = Math.max(y, $(this).height() + $(this).position().top);
    });

    $(".main-payment").css("height", y);
  }
  setHeight();
});

// Nút tăng giảm âm lượng
var input = document.querySelector("#qty");
var btnminus = document.querySelector(".qtyminus");
var btnplus = document.querySelector(".qtyplus");

if (
  input !== undefined &&
  btnminus !== undefined &&
  btnplus !== undefined &&
  input !== null &&
  btnminus !== null &&
  btnplus !== null
) {
  var min = Number(input.getAttribute("min"));
  var max = Number(input.getAttribute("max"));
  var step = Number(input.getAttribute("step"));

  function qtyminus(e) {
    var current = Number(input.value);
    var newval = current - step;
    if (newval < min) {
      newval = min;
    } else if (newval > max) {
      newval = max;
    }
    input.value = Number(newval);
    e.preventDefault();
  }

  function qtyplus(e) {
    var current = Number(input.value);
    var newval = current + step;
    if (newval > max) newval = max;
    input.value = Number(newval);
    e.preventDefault();
  }

  btnminus.addEventListener("click", qtyminus);
  btnplus.addEventListener("click", qtyplus);
}

const inputsWeights = document.querySelectorAll(".option-weight input");

function selectOnlyThisWeight(id) {
  const inputsWeights = document.querySelectorAll(".option-weight input");
  inputsWeights.forEach((el) => (el.checked = false));
  id.checked = true;
}

function selectOnlyThisGrind(id) {
  const inputsGrinds = document.querySelectorAll(".option-grind input");
  inputsGrinds.forEach((el) => (el.checked = false));
  id.checked = true;
}

function adjustPrice() {
  const price = Number(
    document.querySelector(".name-price .price").getAttribute("value")
  );
  let newPrice;
  newPrice = 0;
  const inputsWeights = document.querySelectorAll(".option-weight input");
  let individualWeight;
  inputsWeights.forEach((el) => {
    if (el.checked == true) {
      individualWeight = Number(el.getAttribute("value"));
      // Tạo thêm span "từ" trước giá nếu mà chọn vào cỡ mặc định
      if (Number(el.value) !== 250) {
        document.querySelector(".name-price span:first-of-type").textContent = ""
      } else {
        document.querySelector(".name-price span:first-of-type").textContent = "từ"
      }
    }
  });
  console.log(individualWeight);
  switch (individualWeight) {
    case 100:
      newPrice = price -  (price * 50  / 100);
      break;
    case 250:
      newPrice = price
      break;
    case 500:
      newPrice = price * 2 - (price * 20 / 100);
      break;
    case 1000:
      newPrice = price * 3 -  (price * 30 / 100);
      break;
  }
  document.querySelector(".name-price .price").textContent = '';
  document.querySelector(".name-price .price").textContent = priceWithQty(newPrice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

function priceWithQty (id) {
let inputQty = document.querySelector("section p.qty input").value;
console.log(inputQty)
return id * inputQty;
}

inputsWeights.forEach((el) => {
  el.addEventListener("click", adjustPrice);
})

document.querySelectorAll("section p.qty button").forEach((el) => {
  el.addEventListener("click", adjustPrice);
})

window.onload = document.querySelector("section p.qty input").readOnly = true;

