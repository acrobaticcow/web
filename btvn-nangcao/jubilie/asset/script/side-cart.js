const openBtn = document.querySelector("header .icon");
const closeBtn = document.querySelector(".aside-title i");
const sideCart = document.querySelector(".aside-wrapper");
const overCast = document.querySelector(".overcast");
openBtn.addEventListener("click", () => {
  sideCart.style.width = "25%";
  sideCart.style.paddingLeft = "40px";
  sideCart.style.paddingRight = "40px";
  overCast.style.height = "100%";
});
closeBtn.addEventListener("click", () => {
  sideCart.style.width = "0";
  sideCart.style.paddingLeft = "0";
  sideCart.style.paddingRight = "0";
  overCast.style.height = "0";
});
let overAllPrice = 0; 
adjustPrice();
function adjustPrice() {
  const price = Number(
    document.querySelector(".product-value .price-value").dataset.price
  );
  document.querySelector(".product-value .price-value").textContent = "";
  document.querySelector(".product-value .price-value").textContent =
    priceWithQty(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  adjustProgressBar();
}
function priceWithQty(id) {
  let inputQty = document.querySelector(".product-value p.qty input").value;
  return id * inputQty;
}
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

btnminus.addEventListener("click", adjustPrice);
btnplus.addEventListener("click", adjustPrice);

function adjustProgressBar() {
  let widthOfProgress = document.querySelector(".progress-bar");
  widthOfProgress.style.width = `${calculateProgressWidth()}%`;
}
function calculateProgressWidth() {
  const price = Number(
    document.querySelector(".product-value .price-value").textContent
  );
  const priceMax = Number(
    document.querySelector(".progress + .number").textContent
  );
  let value = (price * 100) / priceMax;
  if (value > 100) return 100;
  return value;
}

