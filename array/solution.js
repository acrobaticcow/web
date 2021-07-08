// Bài 1

// Viết chương trình tính trung bình cộng các giá trị number trong mảng hỗn hợp
// Không tính các giá trị đặc biệt Infinity, -Infinity, NaN
// arr là mảng hỗn hợp nhận vào
// Kết quả cắt đến số thập phân thứ 2
// Nếu mảng rỗng (không chứa giá trị nào) hoặc không chứa giá trị number nào thì trả về NaN
function sumNumber(arr) {
    let total = 0;
    let count = 0;

    for (let item of arr) {
        if (
            (typeof item === "number" || item instanceof Number) &&
            isFinite(item) &&
            !isNaN(item)
        ) {
            total += item;
            count++;
        }
    }

    if (count === 0) return NaN;

    return +(total / count).toFixed(2);
}

// Bài 2

// Viết chương trình tìm số lớn thứ 3 trong mảng number chưa được sắp xếp
// Mảng có thể chứa các giá trị trùng nhau
// Nếu mảng có độ dài nhỏ hơn 3, hoặc không tìm thấy, kết quả là null
// arr là mảng number nhận vào
// Giữ nguyên thứ tự trong arr (không thay đổi mảng đầu vào)
function findThirdNumber(arr) {
    if (arr.length < 3) return null;

    let copy = arr.slice();
    copy.sort(function (a, b) {
        return b - a;
    });

    let number = copy[0];
    let count = 1;

    for (let i = 1; i < copy.length; i++) {
        if (copy[i] < number) {
            number = copy[i];
            count++;
        }

        if (count == 3) {
            return number;
        }
    }

    return null;
}

// Bài 3

// Viết chương trình tìm giá trị có số lần xuất hiện nhiều nhất trong mảng
// Kết quả trả về là một object có dạng
// {values: [number], times: number}
// arr là mảng nhận vào
// Các giá trị trong arr trong khoảng từ 0 -> 20
// Nếu có nhiều giá trị có số lần xuất hiện giống nhau thì thêm vào mảng value
// {values: [number1, number2], times: number}

function maxFrequency(arr) {
    if (arr.length == 0) return null;

    let temp = [];

    for (let item of arr) {
        temp[item] = temp[item] ? temp[item] + 1 : 1;
    }

    let values = [];
    let times = 0;

    for (let item = 1; item < temp.length; item++) {
        if (temp[item] && temp[item] > times) {
            times = temp[item];
            values = [item];
        } else if (temp[item] && temp[item] == times) {
            values.push(item);
        }
    }

    return {
        values,
        times,
    };
}

// Bài 4

// Viết chương trình xáo trộn mảng number (sắp xếp theo thứ tự ngẫu nhiên) chứa các giá trị không trùng lặp
// arr là mảng nhận vào
function shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let rand = Math.floor(Math.random() * (arr.length - i - 1)) + i + 1;

        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
}

// Bài 5

// Viết chương trình loại bỏ các số xuất hiện lặp lại trong mảng number
// arr là mảng truyền vào
// Không thay đổi mảng đầu vào, không thay đổi thứ tự các phần tử đầu ra
function removeDuplicate(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (!output.includes(arr[i])) output.push(arr[i]);
    }

    return output;
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
    let clone = customers.slice();

    return clone
        .sort(function (c1, c2) {
            return c2.points - c1.points;
        })
        .filter(function (customer) {
            return customer.points && customer.points >= 2000;
        });
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
    customers.forEach(function (customer) {
        let points = customer.points;
        
        customer.rating =
            points >= 3000
                ? "Diamon"
                : points >= 2000
                ? "Gold"
                : points >= 1000
                ? "Silver"
                : null;
    });

    return customers.map(function (customer) {
        return {
            name: customer.name,
            rating: customer.rating,
        };
    });
}

// Bài 8

// Viết chương trình tính tổng points của customers
// Sử dụng reduce
// Nếu không có points thì tính bằng 0
function sumPoints(customers) {
    return customers.reduce(function (result, customer) {
        result += customer.points ? customer.points : 0;
        return result;
    }, 0);
}
