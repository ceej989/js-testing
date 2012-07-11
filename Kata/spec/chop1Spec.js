describe("Code Kata 2", function () {
    describe( "when given an easy array: [1,3,5,8,12]", function () {
      var ary = [1,3,5,8,12];
        it("correctly finds 8", function () {
            expect(chop1(8, ary)).toEqual(3);
        });
        it("returns null for an element not in the array", function () {
            expect(chop1(7, ary)).toEqual(null);
        });
        it("returns null when given a null element to search for", function () {
          expect(chop1(null,ary)).toEqual(null);
        });
    });
    describe("When given an empty array: []", function () {
      var ary = [];
      it("returns null when given a number", function () {
        expect(chop1(5, ary)).toEqual(null);
      });
    });
});
