describe("Test Kata 2 - Karate Chop", function () {
    describe( "distance converter", function () {
        it("Find 8 in [-1,0,2,5,8,11]", function () {
            expect(chop1(8, [-1,0,2,5,8,11]).toBe("Found it!");
        });
        
        it("converts centimeters to yards", function () {
            expect(Convert(2000, "cm").to("yards")).toEqual(21.87);
        });
    });

});
