const openBtn = document.querySelector("header .icon");
const closeBtn = document.querySelector(".aside-title i");
const sideCart = document.querySelector(".aside-wrapper");
const overCast = document.querySelector(".overcast");
const allUserProduct = document.querySelectorAll(
  ".checkout-main-table-content > *"
);
const productContainer = document.querySelector(".checkout-main-table-content");
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
  btnminus.addEventListener("click", adjustPrice);
  btnplus.addEventListener("click", adjustPrice);
}

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

// adjust price in checkout.html
allUserProduct.forEach((el) => {
  let userInput = el.querySelector("input");
  let userInputBtnMns = el.querySelector("button:first-child");
  let userInputBtnPls = el.querySelector("button:last-child");
  adjustCheckoutUserPrice(el, userInput.value); // use when loaded
  if (
    userInput !== undefined &&
    userInputBtnMns !== undefined &&
    userInputBtnPls !== undefined &&
    userInput !== null &&
    userInputBtnMns !== null &&
    userInputBtnPls !== null
  ) {
    let userMin = Number(userInput.getAttribute("min"));
    let userMax = Number(userInput.getAttribute("max"));
    let userStep = Number(userInput.getAttribute("step"));

    function qtyminus(e) {
      let current = Number(userInput.value);
      let newval = current - userStep;
      if (newval < userMin) {
        newval = userMin;
      } else if (newval > userMax) {
        newval = userMax;
      }
      userInput.value = Number(newval);
      e.preventDefault();
    }

    function qtyplus(e) {
      let current = Number(userInput.value);
      let newval = current + userStep;
      if (newval > userMax) newval = userMax;
      userInput.value = Number(newval);
      e.preventDefault();
    }

    userInputBtnMns.addEventListener("click", qtyminus);
    userInputBtnPls.addEventListener("click", qtyplus);
    userInputBtnMns.addEventListener("click", () => {
      adjustCheckoutUserPrice(el, userInput.value);
    });
    userInputBtnPls.addEventListener("click", () => {
      adjustCheckoutUserPrice(el, userInput.value);
    });
  }
});

function adjustCheckoutUserPrice(parent, value) {
  let grandPrice = Number(
    document.querySelector(
      ".proceed-to-checkout .price-column .grand-total span:first-child"
    ).textContent
  );
  const price = Number(parent.querySelector(`.price`).dataset.price);
  parent.querySelector(`.subtotal`).textContent = "";
  let individualPrice = (parent.querySelector(`.subtotal`).textContent =
    priceWithQtyForCheckout(price, value)
      .toFixed(3)
      .replace(/\d(?=(\d{3})+\.)/g, "$&."));
      adjustGrandPrice();
}

function priceWithQtyForCheckout(price, value) {
  return price * value;
}

// increaseGrandPrice();
adjustGrandPrice();
function adjustGrandPrice() {
  let grandPrice = 0;
  let subtotal;
  allUserProduct.forEach((product) => {
    subtotal = product.querySelector(".subtotal").innerText;
    // if(subtotal == undefined || subtotal == null || subtotal == NaN) console.log("yes");
    subtotal = subtotal.replace(/\./g, "");
    subtotal = parseFloat(subtotal, 10);
    grandPrice += subtotal;
  });
  document.querySelector(
    ".proceed-to-checkout .price-column .grand-total span:first-child"
  ).textContent = moneyFormat(grandPrice)
  document.querySelector(
    ".proceed-to-checkout .price-column .sub-total span:first-child"
  ).textContent = moneyFormat(grandPrice)
};

function grandPriceAfterDelProduct (el) {
  //new price
  let priceToDel = el.querySelector(".subtotal").innerText;
  priceToDel = priceToDel.replace(/\./g, "");
  priceToDel =  parseFloat(priceToDel, 10) ;
  let grandPrice = document.querySelector(
    ".proceed-to-checkout .price-column .grand-total span:first-child"
  ).innerText;
  grandPrice = grandPrice.replace(/\./g, "");
   grandPrice = parseFloat(grandPrice, 10);
  let finalPrice = grandPrice - priceToDel;
  // update price
  document.querySelector(
    ".proceed-to-checkout .price-column .sub-total span:first-child"
  ).innerText = moneyFormat(finalPrice);
  document.querySelector(
    ".proceed-to-checkout .price-column .grand-total span:first-child"
  ).textContent = moneyFormat(finalPrice)
}

function moneyFormat (money) {
  return new Intl.NumberFormat('vi-VN').format(money)
}

// Làm nút delete cho checkout.html
allUserProduct.forEach((parent) => {
  const deleteBtn = parent.querySelector(".delete-user-product");
  deleteBtn.addEventListener("click", () => {
    grandPriceAfterDelProduct(parent);
    parent.remove();
    createProductTemplate(productContainer);
    displayDelAllBtn();
  });
});

createProductTemplate(productContainer);

function createProductTemplate(parent) {
  if (Number(parent.childElementCount) < 2) {
    let productTemplate = document.createElement("div");
    productTemplate.className = "checkout-product";
    let blockOfColor = document.createElement("div");
    blockOfColor.style.height = "120px";
    blockOfColor.style.width = "100%";
    blockOfColor.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    productTemplate.appendChild(blockOfColor);
    parent.appendChild(productTemplate);
  }
}

//delete all
const dltBtnAll = document.querySelector(".additional-btn .dlt-all");

dltBtnAll.addEventListener("click", () => {
  allUserProduct.forEach((el) => {
    grandPriceAfterDelProduct(el);
    el.remove();
    createProductTemplate(productContainer);
    displayDelAllBtn();
  });
});

//display del-all 

displayDelAllBtn();
function displayDelAllBtn () {
  let count = 0 ;
  allUserProduct.forEach((parent) => {
    if (document.contains(parent.querySelector(".subtotal"))) count += 1
  });
  console.log(count);
  if (count < 2) dltBtnAll.style.display = " none";
  else dltBtnAll.style.display = "block";
};

fetch('https://jubilie-api.herokuapp.com/beans')
  .then(response => response.json())
  .then(data => console.log(data));
