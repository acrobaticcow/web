function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    
}
function closeFunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px";
    document.getElementById("mainbox").innerHTML="&#9776;";
}
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);