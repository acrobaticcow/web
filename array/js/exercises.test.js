describe("Bài 1 - Test", function () {
    describe("Tính trung bình cộng các giá trị kiểu number trong mảng", function () {
        it(`[1, 2, 1.5, 1.5]`, function () {
            let arr = [1, 2, 1.5, 1.5];
            assert.equal(sumNumber(arr), 1.5);
        });

        it(`[5, 0, -5]`, function () {
            let arr = [5, 0, -5];
            assert.equal(sumNumber(arr), 0);
        });

        it(`[5]`, function () {
            let arr = [5];
            assert.equal(sumNumber(arr), 5);
        });

        it(`[{x: 10}, false, "Ahaha"]`, function () {
            let arr = [{ x: 10 }, false, "Ahaha"];
            assert.isNaN(sumNumber(arr));
        });

        it(`[Infinity, NaN, 0, 10]`, function () {
            let arr = [Infinity, NaN, 0, 10];
            assert.equal(sumNumber(arr), 5);
        });

        it(`[]`, function () {
            let arr = [];
            assert.isNaN(sumNumber(arr));
        });

        it(`[1, 5, null, true, {}, new Number(10), "", "Ba", 1.5]`, function () {
            let arr = [1, 5, null, true, {}, new Number(10), "", "Ba", 1.5];
            assert.equal(sumNumber(arr), 4.38);
        });
    });
});

describe("Bài 2 - Test", function () {
    describe("Tìm giá trị lớn thứ 3 trong mảng number", function () {
        it("[4, 10, 17, 16, 19, 4, 7, 20, 20, 13, 12, 4, 12, 18, 18, 6, 8, 18, 17, 10]", function () {
            let arr = [
                4, 10, 17, 16, 19, 4, 7, 20, 20, 13, 12, 4, 12, 18, 18, 6, 8,
                18, 17, 10,
            ];
            assert.equal(findThirdNumber(arr), 18);
            assert.equal(arr[0], 4);
            assert.equal(arr[2], 17);
        });

        it("[1, 17, 10, 19, 2, 7, 12, 1, 5, 8, 14, 20, 6, 2, 16, 6, 7, 16, 16, 17]", function () {
            let arr = [
                1, 17, 10, 19, 2, 7, 12, 1, 5, 8, 14, 20, 6, 2, 16, 6, 7, 16,
                16, 17,
            ];
            assert.equal(findThirdNumber(arr), 17);
            assert.equal(arr[0], 1);
            assert.equal(arr[2], 10);
        });

        it("[1]", function () {
            let arr = [1];
            assert.isNull(findThirdNumber(arr));
            assert.equal(arr[0], 1);
        });

        it("[1, 2, 2, 2, 1, 2]", function () {
            let arr = [1, 2, 2, 2, 1, 2];
            assert.isNull(findThirdNumber(arr));
            assert.equal(arr[0], 1);
            assert.equal(arr[2], 2);
        });

        it("[0, 1, 2]", function () {
            let arr = [0, 1, 2];
            assert.equal(findThirdNumber(arr), 0);
            assert.equal(arr[0], 0);
            assert.equal(arr[2], 2);
        });
    });
});

describe("Bài 3 - Test", function () {
    describe("Tìm giá trị có số lần xuất hiện nhiều nhất trong mảng", function () {
        it(`[1, 20, 3, 14, 3, 20, 6, 8, 15, 16, 13, 10, 20, 6, 4, 20, 1, 1, 1, 6, 12, 14, 9, 13, 5, 18, 15, 20, 4, 14, 10, 12, 5, 11, 5, 11, 18, 8, 7, 8, 4, 19, 9, 10, 18, 7, 19, 14, 20, 7]`, function () {
            let arr = [
                1, 20, 3, 14, 3, 20, 6, 8, 15, 16, 13, 10, 20, 6, 4, 20, 1, 1,
                1, 6, 12, 14, 9, 13, 5, 18, 15, 20, 4, 14, 10, 12, 5, 11, 5, 11,
                18, 8, 7, 8, 4, 19, 9, 10, 18, 7, 19, 14, 20, 7,
            ];

            assert.deepEqual(maxFrequency(arr), { values: [20], times: 6 });
        });

        it(`[15, 8, 15, 11, 10, 1, 12, 7, 15, 17, 6, 6, 17, 14, 13, 19, 7, 18, 19, 10, 9, 9, 20, 8, 14, 15, 17, 2, 14, 14, 16, 18, 5, 6, 13, 2, 7, 20, 18, 7, 1, 10, 16, 10, 3, 9, 6, 19, 1, 4]`, function () {
            let arr = [
                15, 8, 15, 11, 10, 1, 12, 7, 15, 17, 6, 6, 17, 14, 13, 19, 7,
                18, 19, 10, 9, 9, 20, 8, 14, 15, 17, 2, 14, 14, 16, 18, 5, 6,
                13, 2, 7, 20, 18, 7, 1, 10, 16, 10, 3, 9, 6, 19, 1, 4,
            ];

            assert.deepEqual(maxFrequency(arr), {
                values: [6, 7, 10, 14, 15],
                times: 4,
            });
        });

        it(`[7, 2, 4, 14, 10, 13, 17, 16, 1, 1, 17, 2, 14, 11, 15, 3, 3, 16, 20, 9, 14, 8, 20, 8, 17, 1, 15, 1, 13, 13, 17, 17, 2, 5, 11, 14, 19, 12, 20, 14, 14, 6, 3, 7, 9, 6, 5, 8, 16, 9]`, function () {
            let arr = [
                7, 2, 4, 14, 10, 13, 17, 16, 1, 1, 17, 2, 14, 11, 15, 3, 3, 16,
                20, 9, 14, 8, 20, 8, 17, 1, 15, 1, 13, 13, 17, 17, 2, 5, 11, 14,
                19, 12, 20, 14, 14, 6, 3, 7, 9, 6, 5, 8, 16, 9,
            ];

            assert.deepEqual(maxFrequency(arr), { values: [14], times: 6 });
        });

        it(`[1]`, function () {
            let arr = [1];

            assert.deepEqual(maxFrequency(arr), { values: [1], times: 1 });
        });

        it(`[1, 1, 2, 2]`, function () {
            let arr = [1, 1, 2, 2];

            assert.deepEqual(maxFrequency(arr), { values: [1, 2], times: 2 });
        });

        it(`[]`, function () {
            let arr = [];

            assert.isNull(maxFrequency(arr));
        });
    });
});

describe("Bài 4 - Test", function () {
    describe("Xáo trộn mảng number", function () {
        it("[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", function () {
            let arr = [0, 1, 2, 3, 4];
            shuffle(arr);
            assert.notEqual(arr[0], 0);
            assert.notEqual(arr[1], 1);
            assert.notEqual(arr[2], 2);
            assert.notEqual(arr[3], 3);
            assert.notEqual(arr[4], 4);
        });

        it("[3, 2, 5, 6, 1, 4, 0]", function () {
            let arr = [3, 2, 5, 6, 1, 4, 0];
            shuffle(arr);
            assert.notEqual(arr[0], 3);
            assert.notEqual(arr[1], 2);
            assert.notEqual(arr[2], 5);
            assert.notEqual(arr[3], 6);
            assert.notEqual(arr[4], 1);
            assert.notEqual(arr[5], 4);
            assert.notEqual(arr[6], 0);
        });

        it("[1, 2]", function () {
            let arr = [1, 2];
            shuffle(arr);
            assert.notEqual(arr[0], 1);
            assert.notEqual(arr[1], 2);
        });
    });
});

// arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 20));
// }
// console.log(arr.toString());

describe("Bài 5 - Test", function () {
    describe("Loại bỏ các giá trị lặp lại trong mảng number", function () {
        it("[]", function () {
            let arr = [];
            assert.deepEqual(removeDuplicate(arr), []);
            assert.equal(arr.length, 0);
        });

        it("[1, 2, 3]", function () {
            let arr = [1, 2, 3];
            assert.deepEqual(removeDuplicate(arr), [1, 2, 3]);
            assert.equal(arr[0], 1);
            assert.equal(arr[1], 2);
            assert.equal(arr[2], 3);
        });

        it("[1, 1, 1, 1, 1, 1, 1]", function () {
            let arr = [1, 1, 1, 1, 1, 1, 1];
            assert.deepEqual(removeDuplicate(arr), [1]);
        });

        it("[18, 16, 9, 18, 0, 1, 4, 19, 7, 16, 5, 19, 0, 3, 8, 16, 19, 0, 0, 11]", function () {
            let arr = [
                18, 16, 9, 18, 0, 1, 4, 19, 7, 16, 5, 19, 0, 3, 8, 16, 19, 0, 0,
                11,
            ];
            assert.deepEqual(
                removeDuplicate(arr),
                [18, 16, 9, 0, 1, 4, 19, 7, 5, 3, 8, 11]
            );
            assert.equal(arr[0], 18);
            assert.equal(arr[5], 1);
            assert.equal(arr[19], 11);
        });
    });
});

describe("Bài 6 - Test", function () {
    it("Sắp xếp mảng customers theo points giảm dần, kết quả chỉ bao gồm customer có points và points >= 2000", function () {
        assert.deepEqual(sortByPoints(customers), [
            { id: 1, name: "Ba", email: "0965338283", points: 3425 },
            {
                id: 3,
                name: "Ú",
                email: "0965338832",
                points: 2341,
            },
        ]);
    });
});

describe("Bài 7 - Test", function () {
    it("Thêm thông tin xếp hạng cho customer, trả về kết quả mảng chỉ bao gồm name và rating", function () {
        assert.deepEqual(rating(customers), [
            {
                name: "Ba",
                rating: "Diamon",
            },
            {
                name: "Béo",
                rating: "Silver",
            },
            {
                name: "Ú",
                rating: "Gold",
            },
            {
                name: "Bon",
                rating: null,
            },
        ]);

        assert.equal(customers[0].rating.toLowerCase(), "diamon");
    });
});

describe("Bài 8 - Test", function () {
    it("Tính tổng points của customers", function () {
        assert.equal(sumPoints(customers), 7000);
    });
});
