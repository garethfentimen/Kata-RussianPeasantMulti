var russianPeasantMultiplier = require('../app/russianPeasantCalculation.js');

// Test 1 for Peasant Kata
describe("Russian Peasant Calculator Test Specification", function () {

	it("should calculate a result 2x2", function()
	{
		var russianPeasant = new russianPeasantMultiplier(2,2);
		expect(russianPeasant.getCalculation().message).toEqual(4);
	});

	it("should calculate a result 3x3", function()
	{
		var russianPeasant = new russianPeasantMultiplier(3,3);
		expect(russianPeasant.getCalculation().message).toEqual(9);
	});

	it("should calculate a result 6x4", function()
	{
		var russianPeasant = new russianPeasantMultiplier(6,4);
		expect(russianPeasant.getCalculation().message).toEqual(24);
	});

	it("should calculate a result 5x5", function()
	{
		var russianPeasant = new russianPeasantMultiplier(5,5);
		expect(russianPeasant.getCalculation().message).toEqual(25);
	});

	it("should calculate a result 10x10", function()
	{
		var russianPeasant = new russianPeasantMultiplier(10,10);
		expect(russianPeasant.getCalculation().message).toEqual(100);
	});

	it("should calculate a result 18x23", function()
	{
		var russianPeasant = new russianPeasantMultiplier(18,23);
		expect(russianPeasant.getCalculation().message).toEqual(414);
	});
	
});