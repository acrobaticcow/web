// Bài 1

// Viết chương trình kiểm tra một giá trị có phải một string hay không
// value là giá trị nhận vào
function isString(value) {
    // return boolean
    return typeof value === 'string';
    
}

// Ví dụ cho đoạn văn sau
let para =
    "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

// Bài 2

// Viết chương trình tìm highlight (in hoa) tất các từ khóa xuất hiện trong đoạn văn
// VD: 'bạn' -> "Xin chào các BẠN! ..."
// key là từ khóa
// key không chứa ký tự đặc biệt
// Từ khóa phải là một từ riêng biệt (phía sau có dấu cách hoặc dấu câu)
// KHÔNG phân biệt chữ hoa chữ thường
// Code sẵn là gợi ý
function highlight(para, key) {
    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ ký tự đặc biệt
    modifiedPara = modifiedPara.replaceAll(".", " ");
    modifiedPara = modifiedPara.replaceAll(",", " ");
    modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toUpperCase(key) + " ";
    modifiedKey = modifiedKey.replaceAll(".", " ");
    modifiedKey = modifiedKey.replaceAll(",", " ");
    modifiedKey = modifiedKey.replaceAll("!", " ");

    return modifiedKey;

}

// Bài 3

// Viết chương trình lấy ra câu đầu tiên xuất hiện từ khóa, đồng thời highlight (in hoa) từ khóa
// Code sẵn là gợi ý
function firstSentence(para, key) {
    // Chuyển đổi tất cả dấu kết thúc câu khác như !; thành .
    let onlyDot = para.replaceAll("!", ".");
    let arraySentence = para.split(".", 1);
    for (i = 0; i < arraySentence.length; i++) {

    }

    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ dấu kết thúc câu
    // modifiedPara = modifiedPara.replaceAll(".", " ");
    // modifiedPara = modifiedPara.replaceAll(",", " ");
    // modifiedPara = modifiedPara.replaceAll("!", " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toUpperCase() + " ";

    // Nếu không có từ khóa, return null
    // Nếu có, return câu đó kèm highlight từ khóa
}

// Bài 4

// Viết chương trình tính số ngày còn lại đến tết dương lịch năm sau
function dayLeft() {
    // return number
}

// Bài 5

// Viết chương trình tính số tuổi theo ngày tháng năm sinh
// Tính chính xác theo ngày
// birthday là chuỗi ngày tháng năm sinh theo format "YYYY-MM-DD"
// Kiểm tra ngày tháng truyền vào có hợp lệ hay không
// Ví dụ birthday truyền vào và ngày thực tế tạo ra không khớp
// Nếu không hợp lệ thì trả về NaN
function calcAge(birthday) {
    // Nếu birthday không khớp format "YYYY-MM-DD"
    if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(birthday)) return NaN;

    // return number
}
