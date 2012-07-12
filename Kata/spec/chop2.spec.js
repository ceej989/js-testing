describe("Code Kata 2", function () {
    describe( "When given an easy array: [1,3,5,8,12]", function () {
      var ary = [1,3,5,8,12];
        it("correctly finds 8", function () {
            expect(chop2(8, ary)).toEqual(3);
        });
        it("correctly finds 1", function () {
          expect(chop2(1, ary)).toEqual(0);
        });
        it("returns -1 for an element not in the array", function () {
            expect(chop2(7, ary)).toEqual(-1);
        });
        it("returns -1 when given a null element to search for", function () {
          expect(chop2(null,ary)).toEqual(-1);
        });
    });
    describe("When given an empty array: []", function () {
      var ary = [];
      it("returns -1 when given a number", function () {
        expect(chop2(5, ary)).toEqual(-1);
      });
    });
    describe("When given an array with repeated elements: [1,3,5,6,6,6,7,8]", function () {
      var ary = [1,3,5,6,6,6,7,8];
      it("finds the first index of the repeated number.", function() {
        expect(chop2(6,ary)).toEqual(3);
      });
      it("correctly finds a non-repeated value in the array.", function () {
        expect(chop2(7,ary)).toEqual(6);
      });
    });
});
