let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000)
}
// let slideIndex2 = 0;
// showSlides2();
// function showSlides2() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
    
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex2++;
//     if (slideIndex2 > slides.length) {slideIndex2 = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex2-1].style.display = "flex";  
//     dots[slideIndex2-1].className += " active";
//     setTimeout(showSlides2, 2000); // Change image every 2 seconds
//   }
  
function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    
}
function closeFunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px";
    document.getElementById("mainbox").innerHTML="&#9776;";
}