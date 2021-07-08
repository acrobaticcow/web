// Bài 1

// Viết chương trình tính trung bình cộng các giá trị number trong mảng hỗn hợp
// Không tính các giá trị đặc biệt Infinity, -Infinity, NaN
// arr là mảng hỗn hợp nhận vào
// Kết quả cắt đến số thập phân thứ 2
// Nếu mảng rỗng (không chứa giá trị nào) hoặc không chứa giá trị number nào thì trả về NaN
function sumNumber(arr) {
    let sum = 0; 
    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    return (sum / arr.length * 100) / 100;
}

// bài chữa
// function sumNumber(arr) {
//     let total = 0;
//     let count = 0;
//     for (let item of arr) {
//         if (
//             (typeof item === 'number' || item instanceof Number) &&
//             isFinite(item) && !isNaN(item)
//         )
//     }
// }

// Bài 2

// Viết chương trình tìm số lớn thứ 3 trong mảng number chưa được sắp xếp
// Mảng có thể chứa các giá trị trùng nhau
// Nếu mảng có độ dài nhỏ hơn 3, hoặc không tìm thấy, kết quả là null
// arr là mảng number nhận vào
// Giữ nguyên thứ tự trong arr (không thay đổi mảng đầu vào)
function findThirdNumber(arr) {
    if (arr.length < 3) return null;
    arr.sort((a , b) => a - b);
    let firstNumber = arr[arr.length - 1 ];
    let secondNumber = arr[0];
    let thirdNumber = arr[0];
    for ( let i = 0; i < arr.length; i++) {
      if (secondNumber < arr[i] && arr[i] < firstNumber ) {
        secondNumber = arr[i];
      }
    }
    for ( let i = 0; i < arr.length; i++) {
      if (thirdNumber < arr[i] && arr[i] < secondNumber ) {
        thirdNumber = arr[i];
      }
    }
  return thirdNumber;
}

// Bài 3

// Viết chương trình tìm giá trị có số lần xuất hiện nhiều nhất trong mảng
// Kết quả trả về là một object có dạng
// {values: [number], times: number}
// arr là mảng nhận vào
// Các giá trị trong arr trong khoảng từ 0 -> 20
// Nếu có nhiều giá trị có số lần xuất hiện giống nhau thì thêm vào mảng value
// {values: [number1, number2], times: number}
arr.sort((a , b) => a - b);
    let times = 1;
    let currentCount = 1;
    let value = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            currentCount++;
        }
        else if(currentCount > times) {
            currentCount = times;
            value = arr[i -1];
        }
        else {
            currentCount = 1;
        }
    }
    if (currentCount > times) {
        times = currentCount;
        values = arr[arr.length - 1];
    }
return {values, times };

// Bài 4

// Viết chương trình xáo trộn mảng number (sắp xếp theo thứ tự ngẫu nhiên) chứa các giá trị không trùng lặp
// arr là mảng nhận vào
// Thay đổi thứ tự trong chính mảng arr
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// Bài 5

// Viết chương trình loại bỏ các số xuất hiện lặp lại trong mảng number
// arr là mảng truyền vào
// Không thay đổi mảng đầu vào, không thay đổi thứ tự các phần tử đầu ra
function removeDuplicate(arr) {
    let unique = [...new Set(arr)];
    return unique;
    // return new array
}

// Cho mảng customers như sau
let customers = [
    {
        id: 1,
        name: "Ba",
        email: "0965338283",
        points: 3425,
    },
    {
        id: 2,
        name: "Béo",
        email: "0965338382",
        points: 1234,
    },
    {
        id: 3,
        name: "Ú",
        email: "0965338832",
        points: 2341,
    },
    {
        id: 4,
        name: "Bon",
        email: "0965338823",
    },
];

// Bài 6

// Viết chương trình sắp xếp mảng customers theo points giảm dần
// Trả về mảng kết quả chỉ bao gồm các customers có points và points >= 2000
// KHÔNG làm biến đổi mảng customers
// Sử dụng sort và filter
function sortByPoints(customers) {
    customers.sort((a , b) => b.points - a.points)
    return customers.filter(x => x.points > 2000);
    }

// Bài 7

// Viết chương trình xếp hạng cho các customer trong mảng customers
// Thêm thuộc tính rating tương ứng với points cho mỗi customer
// Nếu points >= 1000 -> rating: "Silver"
// Nếu points >= 2000 -> rating: "Gold"
// Nếu points >= 3000 -> rating: "Diamon"
// Nếu points < 1000 hoặc không có points -> rating: null

// Trả về kết quả là một mảng mới chỉ bao gồm thông tin name và rating
// VD: [{name: "Ba", rating: "Diamon"}, ...]
// Sử dụng forEach, map
// Mảng gốc thêm thuộc tính rating
function rating(customers) {
    customers.forEach(function(customer) {
        let points = customers.points
        points >= 3000
        ? customer.rating = "Diamon"
        : points >= 2000
        ? customers.rating = "Gold"
        :points >= 1000
        ? customers.rating = "Silver"
        : customer.rating = null;
    })
    return customers.map(function(customer) {
        return [{name: customer.name, rating: customer.rating}];
    });
}

// Bài 8

// Viết chương trình tính tổng points của customers
// Sử dụng reduce
// Nếu không có points thì tính bằng 0
function sumPoints(customers) {
    customers.map(function (customer) {
      if (customer.hasOwnProperty("points") == false) {
        customer.points = 0;
      }
    });
    let total = 0;
     customers.reduce(function(sum, customer) {
          total = sum;
          sum += customer.points;
          return sum;
      }, 0);
      return total;
  }
