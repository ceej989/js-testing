describe("Code Kata 2", function () {
    describe( "Find 8 in the Array", function () {
        it("uses the binary chop algorithm with loops small (5 elements) version", function () {
            expect(chop1(8, [1,3,5,8,12])).toEqual(3);
        });
        it("uses the binary chop algorithm with loops larger (12 elements) version", function () {
            expect(chop1(8, [1,3,5,5,7, 8,12,12, 20, 23, 24, 26, 29, 31])).toEqual(4);
        });
    });


});
