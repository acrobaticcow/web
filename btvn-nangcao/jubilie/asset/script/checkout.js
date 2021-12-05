const checkOutWindow = document.querySelector(".pop-up-shop");
const checkOutClsBtn = document.querySelector(".pop-up-shop button.delete");
const addToCartBtn = document.querySelectorAll(".wrap-price-btn input");
const optionWeight = document.querySelector("#weight-pop-up-shop");
const price = Number(
    document.querySelector(".pop-up-shop .price").dataset.price
  );
const checkOutBtn = document.querySelector(".pop-up-shop button.add-to-cart");
// display checkout
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkOutWindow.style.display = "block";
    overCast.style.height = "100%";
  });
});
checkOutClsBtn.addEventListener("click", () => {
  checkOutWindow.style.display = "none";
  overCast.style.height = "0%";
});
function priceWithQty(id) {
  let inputQty = document.querySelector(".pop-up-shop p.qty input").value;
  return id * inputQty;
}
adjustPrice();
function adjustPrice() {
  let newPrice;
  newPrice = 0;
  switch (Number(optionWeight.value)) {
    case 100:
      newPrice = price - (price * 50) / 100;
      break;
    case 250:
      newPrice = price;
      break;
    case 500:
      newPrice = price * 2 - (price * 20) / 100;
      break;
    case 1000:
      newPrice = price * 3 - (price * 30) / 100;
      break;
  }
  document.querySelector(".pop-up-shop .price").textContent = "";
  document.querySelector(".pop-up-shop .price").textContent = priceWithQty(
    newPrice
  )
    .toFixed(3)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    console.log(newPrice)
}
let checkOutInput = document.querySelector("#checkout-qty");
let checkOutbtnminus = document.querySelector(".pop-up-shop .qtyminus");
let checkOutbtnplus = document.querySelector(".pop-up-shop .qtyplus");
if (
    checkOutInput !== undefined &&
    checkOutbtnminus !== undefined &&
    checkOutbtnplus !== undefined &&
    checkOutInput !== null &&
    checkOutbtnminus !== null &&
    checkOutbtnplus !== null
  ) {
    var min = Number(checkOutInput.getAttribute("min"));
    var max = Number(checkOutInput.getAttribute("max"));
    var step = Number(checkOutInput.getAttribute("step"));
  
    function qtyminus(e) {
      var current = Number(checkOutInput.value);
      var newval = current - step;
      if (newval < min) {
        newval = min;
      } else if (newval > max) {
        newval = max;
      }
      checkOutInput.value = Number(newval);
      e.preventDefault();
    }
  
    function qtyplus(e) {
      var current = Number(checkOutInput.value);
      var newval = current + step;
      if (newval > max) newval = max;
      checkOutInput.value = Number(newval);
      e.preventDefault();
    }
  
    checkOutbtnminus.addEventListener("click", qtyminus);
    checkOutbtnplus.addEventListener("click", qtyplus);
  }


  
  checkOutbtnminus.addEventListener("click", adjustPrice);
  checkOutbtnplus.addEventListener("click", adjustPrice);

  optionWeight.addEventListener("change", adjustPrice)