let width = prompt ("Độ dài cạnh đáy","");
let height = prompt ("Độ dài đường vuông góc từ đỉnh đến cạnh đáy", "");
function area(width, height) {
    return ((width * height) / 2) ;
}
 console.log(area(width,height)); 
 alert ( JSON.stringify(area(width,height)));

 let c = prompt ("Độ C", "");
 function cToF(c) {
     return c*33.8
 };
 console.log(cToF(c));

 let f = prompt ("Độ F", "");
 function fToC(f) {
     return f/33.8
 };
 console.log(fToC(f));

 let km = prompt("...km");
 function conversion (km) {
     return km*1000 + "m" + "," + km*10000 + "dm" + "," + km*100000 + "cm" + "," + km*1000000 + "mm" ;
 }
 console.log(conversion(km));

 let number = prompt("Số bất kì");
 function soSanh (number) {
     return (number < 40 && number > 20); 
 }
 console.log(soSanh(number));