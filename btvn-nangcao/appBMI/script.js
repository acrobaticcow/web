$(function () {
  function result(element) {
    $(".result").text(`${element}`);
  }
  function calculate(a, b) {
      let number = a / (b * b)
    result(`${number.toFixed(2)}`);
  }
  $(".cal").on("click", () => {
    const weight = $(".weight").val();
    const height = $(".height").val();
    if (!isNaN(weight) && !isNaN(height)) {
      calculate(weight, height);
      $(".result").text() < 18.5
        ? $(".assessment").text(" Bọ Gậy")
        : $(".result").text() < 23
        ? $(".assessment").text("Ổn")
        : $(".result").text() < 25
        ? $(".assessment").text("Chuẩn bị xấu")
        : $(".result").text() < 30
        ? $(".assessment").text("Đồ con bò")
        : $(".assessment").text("💀");
    } else $(".assessment").text("Nhập số đi cưng");
  });
});
