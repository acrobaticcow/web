// Tạo thanh filter
const resultEl = document.querySelector(".result-box");
const btnRemoveFilter = document.querySelector(".btn-remove-filter");
const inputsAll = document.querySelectorAll(".input-all");
const inputItemsAll = document.querySelectorAll(".input-item");

let filter = {
  roast: [],
  acidity: [],
  origin: [],
  process: [],
};

function renderFilter(filterObj) {
  resultEl.innerHTML = "";

  // displayBtnRemoveFilter(filterObj);

  for (const key in filterObj) {
    const inputAll = document.querySelector(
      `.${key} .input-all[category="${key}"]`
    );

    const inputItems = document.querySelectorAll(
      `.${key} .input-item[category="${key}"]`
    );
    if (filterObj[key].length == 0) {
      inputAll.checked = true;
      Array.from(inputItems).map((input) => (input.checked = false));
    } else {
      inputAll.checked = false;
      Array.from(inputItems).map((input) => {
        let title = input.value;
        if (filterObj[key].includes(title)) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });

      createFilter(key, filterObj[key]);
    }
  }
}

function createFilter(key, obj) {
  obj.forEach((ele) => {
    resultEl.insertAdjacentHTML(
      "beforeend",
      `<button class=" tag d-flex align-items-center" onclick="removeFilterItemAndRender('${key}', '${ele}')"> 
     <span class="bold text-uppercase">${ele}</span>
     <span class="del icon"></span>
   </button>`
    );
  });
}

function removeFilterItemAndRender(key, ele) {
  removeFilterItem(key, ele);
  renderFilter(filter);
}

function removeFilterItem(key, ele) {
  for (let i = 0; i < filter[key].length; i++) {
    const item = filter[key][i];
    if (item == ele) {
      filter[key].splice(i, 1);
    }
  }
}

btnRemoveFilter.addEventListener("click", function () {
  for (const key in filter) {
    filter[key] = [];
  }
  renderFilter(filter);
});

Array.from(inputsAll).map((input) => {
  input.addEventListener("change", function () {
    if (!input.checked) {
      return;
    }
    let filterKey = input.getAttribute("category");
    input.checked = true;
    filter[filterKey] = [];
    renderFilter(filter);
  });
});

Array.from(inputItemsAll).map((input) => {
  input.addEventListener("change", function () {
    let filterKey = input.getAttribute("category");
    if (input.checked) {
      filter[filterKey].push(input.value);
    } else {
      removeFilterItem(filterKey, input.value);
    }
    renderFilter(filter);
  });
});

function displayBtnRemoveFilter(filterObj) {
  for (const key in filterObj) {
    if (filterObj[key].length != 0) {
      btnRemoveFilter.classList.remove("hide");
      return;
    }
    btnRemoveFilter.classList.add("hide");
  }
}

window.onload = renderFilter(filter);

(function onDOmChanged() {
  let observer = new MutationObserver(function (mutations) {
    renderTarget();
  });
  let config = { attributes: true, childList: true, characterData: true };
  let target = document.querySelector(".result-box");
  observer.observe(target, config);
})();

let mangoTango = new Product(
  "Chuối",
  "Châu Phi",
  "Cao",
  "Ướt",
  "Nhạt",
  "200,000",
  [" Xoài", " Chanh", " Mật Ong"]
);

let myProduct = {
  asefaDukamo: new Product(
    "Asefa Dukamo",
    "Châu Phi",
    "Cao",
    "Honey",
    "Nhạt",
    "300,000",
    [" Dưa Gang", " Hoa Đào", "Quả Hạch"]
  ),
  aynalemKupo: new Product(
    "Aynalem Nono",
    "Châu Phi",
    "Cao",
    "Ướt",
    "Vừa",
    "250,000",
    [" Xuân Đào", " Bergarmot", " Black Tea"]
  ),
  aynalemKospo: new Product(
    "Aynalem Kupo",
    "Châu Mĩ",
    "Thấp",
    "Tự nhiên",
    "Đậm",
    "250,000",
    [" Xuân Đào", " Bergarmot", " Black Tea"]
  ),
};

// myProduct = {
//   asefaDukamo,aynalemKupo, blah, blaeh, ah
// }

// function exportProductObj() {
//   let productCard = document.querySelectorAll(".store.col .col");
//   productCard.forEach((card) => {
//     card.addEventListener("mouseenter", () => {
//       for (let product in myProduct) {
//         if (card.querySelector("[data-name]").dataset.name == myProduct[product].name) {
//           console.log('asd')
//         }
//       }
//     });
//   });
// }

function renderTarget() {
  let store = document.querySelectorAll(".all-product div.col");
  let filteredProducts = document.querySelector(".filtered-product");
  let filteredProductsName = [];
  if (resultEl.hasChildNodes()) {
    store.forEach((product) => (product.style.display = "none"));
  } else {
    while (filteredProducts.lastElementChild) {
      filteredProducts.removeChild(filteredProducts.lastElementChild);
    } // clear filterd div
    store.forEach((product) => (product.style.display = "block"));
  }
  filteredProducts.innerHTML = "";
  let requireTarget = [];
  resultEl.childNodes.forEach((el) => requireTarget.push(el.innerText));
  let result;
  for (let product in myProduct) {
    let value = Object.values(myProduct[product]);
    // value[1] là category
    let result = requireTarget.some((target) => {
      return Object.values(value[1]).some(
        (k) => k.toUpperCase() === target.toUpperCase()
      );
    });
    if (result == true) {
      renderProductCard(myProduct[product]);
    }
  }
  document.querySelectorAll(".filtered-product .col .name").forEach((el) => {
    // if (!filteredProductsName.some((k) => k == el.dataset.name))
    filteredProductsName.push(el.dataset.name);
  });
}

function countDuplicate(a) {
  let counts = {};
  let duplicated = [];
  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      duplicated.push(prop);
    }
  }
  return duplicated;
}

function addWhitespace(str) {
  str = " ".repeat(x) + str;
}

function renderProductCard(id) {
  const storeFront = document.querySelector(".filtered-product");
  storeFront.insertAdjacentHTML(
    "beforeend",
    `
  <div class="col">
            <a href="chitiet.html">
              <div name="berry good" class="store-product-card">
                <div class="product-card-header">
                  <p data-name = "${id.name}" class="name bold">${id.name}</p>
                  <span class="notes italic text-capitalize">Notes:</span>
                  <span data-notes ="${id.notes}" class="notes italic text-capitalize">${id.notes}</span>
                </div>
                <div class="content wrap-img">
                  <div class="secondary-content-img-overlay"></div>
                  <div class="content-overlay"></div>
                  <div class="content-image">
                    <img src="../asset/icons/coffee-bag-mock-up-minimal.webp" alt="rwanda coffee" />
                  </div>
                  <div class="
                        content-details
                        fadeIn-bottom
                        d-flex
                        align-items-center
                      ">
                    <div class="content-details-collumn">
                      <div class="detail">
                        <p class="bold">Xuất xứ</p>
                        <p data-origin="${id.category.origin}" class="origin regular">${id.category.origin}</p>
                      </div>
                      <div class="detail">
                        <p class="bold">Độ chua</p>
                        <p data-acidity="${id.category.acidity}" class="acidity regular">${id.category.acidity}</p>
                      </div>
                    </div>
                    <div class="content-details-collumn">
                      <div class="detail">
                        <p class="bold">Sơ chế</p>
                        <p data-process ="${id.category.process}" class="process regular">${id.category.process}</p>
                      </div>
                      <div class="detail">
                        <p class="bold">Rang</p>
                        <p data-roast="${id.category.roast}"class="roast regular" >${id.category.roast}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="regular">From</p>
                <div class="
                      wrap-price-btn
                      d-flex
                      align-items-center
                      justify-content-between
                      bold
                    ">
                  <div class="wrapper">
                    <span data-price = "${id.price}" class="store-price bold">${id.price}</span>
                    <span class="currency bold text-uppercase">vnd</span>
                  </div>
                  <input id="mango-tango" type="button" value="" />
                  <label for="mango-tango"></label>
                </div>
              </div>
            </a>
          </div>
  `
  );
}
function Product(name, origin, acidity, process, roast, price, notes) {
  this.name = name;
  this.category = {
    origin: origin,
    acidity: acidity,
    process: process,
    roast: roast,
  };
  this.price = price;
  this.notes = notes;
}
