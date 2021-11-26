const openBtn = document.querySelector("header .icon");
const closeBtn = document.querySelector(".aside-title i");
const sideCart = document.querySelector(".aside-wrapper");
const overCast = document.querySelector(".overcast");
openBtn.addEventListener("click", () => {
    sideCart.style.width = "25%";
    sideCart.style.paddingLeft = "40px";
    sideCart.style.paddingRight = "40px";
    overCast.style.height = "100%"
});
closeBtn.addEventListener("click", () => {
    sideCart.style.width = "0";
    sideCart.style.paddingLeft = "0";
    sideCart.style.paddingRight = "0";
    overCast.style.height = "0";
})