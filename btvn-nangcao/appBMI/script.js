$(function () {
  const weight = $(".weight");
  const height = $(".height");
  const btn = $(".btn");
  const C = $(".C");
  const F = $(".F");
  const K = $(".K");

  $(".mb-5 input").on("input", () => {
   console.log(`${$(this).val()}`);
  });

  btn.on("click", (ev) => {
    ev.preventDefault();
    let weightInput = weight.val();
    let heightInput = height.val();
    let userBMI = weightInput / Math.pow(heightInput, 2);
    console.log(userBMI);
    let result;
    if (userBMI <= 16) {
      result = "Gầy độ III";
    } else if (userBMI <= 17.5) {
      result = "Gầy độ II";
    } else if (userBMI <= 18.5) {
      result = "Gầy độ I";
    } else if (userBMI <= 25) {
      result = "Bình thường";
    } else if (userBMI <= 30) {
      result = "Hơi béo";
    } else if (userBMI <= 35) {
      result = "Béo phì độ I";
    } else if (userBMI <= 40) {
      result = "Béo phì độ II";
    } else if (40) {
      result = "Béo phì độ III";
    } else {
      result = "Chúc mừng bạn đã chết";
    }
    $("p").text(result);
    weight.val("");
    height.val("");
  });
});
