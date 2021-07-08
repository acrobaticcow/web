describe("Bài 1 - Test", function () {
    describe("Kiểm tra một giá trị có phải string hay không", function () {
        it('"Ba Nguyễn"', function () {
            assert.isTrue(isString("Ba Nguyễn"));
        });

        it("123", function () {
            assert.isFalse(isString(123));
        });

        it('"123"', function () {
            assert.isTrue(isString("123"));
        });

        it("null", function () {
            assert.isFalse(isString(null));
        });

        it("undefined", function () {
            assert.isFalse(isString(undefined));
        });

        it("{x: 1}", function () {
            assert.isFalse(isString({ x: 1 }));
        });

        it('new String("Ba Nguyễn")', function () {
            assert.isTrue(isString(new String("Ba Nguyễn")));
        });

        it('"Ahaha"', function () {
            assert.isTrue(isString("Ahaha"));
        });

        it('""', function () {
            assert.isTrue(isString(""));
        });

        it("new String()", function () {
            assert.isTrue(isString(new String()));
        });
    });
});

describe("Bài 2 - Test", function () {
    describe("Highlight một từ khóa trong đoạn văn", function () {
        let para =
            "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

        it("bạn", function () {
            let key = "bạn";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("haha", function () {
            let key = "haha";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.equal(result.indexOf(upperKey), -1);
        });

        it("vui vẻ", function () {
            let key = "vui vẻ";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("chào", function () {
            let key = "chào";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("ba", function () {
            let key = "ba";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.isAbove(result.indexOf(upperKey), -1);
        });

        it("béo", function () {
            let key = "béo";
            let upperKey = key.toUpperCase();
            let result = highlight(para, key);

            assert.equal(result.indexOf(upperKey), -1);
        });
    });
});

describe("Bài 3 - Test", function () {
    describe("Tìm câu đầu tiên xuất hiện trong đoạn văn và highlight từ khóa", function () {
        let para =
            "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

        it("bạn", function () {
            let key = "bạn";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 13);
            assert.isAbove(result.indexOf("!"), -1);
        });

        it("haha", function () {
            let key = "haha";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isNull(result);
        });

        it("vui vẻ", function () {
            let key = "vui vẻ";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 28);
            assert.isAbove(result.indexOf("."), -1);
        });

        it("chào", function () {
            let key = "chào";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 13);
            assert.isAbove(result.indexOf("!"), -1);
        });

        it("ba", function () {
            let key = "ba";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isString(result);
            assert.lengthOf(result, 88);
            assert.isAbove(result.indexOf(","), -1);
        });

        it("béo", function () {
            let key = "béo";
            let upperKey = key.toUpperCase();
            let result = firstSentence(para, key);

            assert.isNull(result);
        });
    });
});

describe("Bài 4 - Test", function () {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let nextYear = new Date(now.getFullYear() + 1, 0, 1);

    let timeLeft = nextYear.getTime() - today.getTime();
    let result = timeLeft / 1000 / 60 / 60 / 24;
    it("Tính số ngày còn lại đến tết dương lịch", function () {
        assert.equal(dayLeft(), result);
    });
});

describe("Bài 5 - Test", function () {
    describe("Tính tuổi theo chuỗi ngày tháng năm sinh truyền vào", function () {
        it("2124-234234-234", function () {
            assert.isNaN(calcAge("2124-234234-234"));
        });

        it("1992", function () {
            assert.isNaN(calcAge("1992"));
        });

        it("1992-05-24", function () {
            assert.equal(calcAge("1992-05-24"), 29);
        });

        it("1992-07-01", function () {
            assert.equal(calcAge("1992-07-01"), 28);
        });

        it("2018-03-13", function () {
            assert.equal(calcAge("2018-03-13"), 3);
        });
    });
});
