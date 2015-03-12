var peasantCalculator = function(number1, number2) {
	this.Number1 = number1;
	this.Number2 = number2;
};

peasantCalculator.prototype = function () {
	
	var divideByTwo = function(number)
	{
		return Math.floor(number/2);
	};

	var multiplyByTwo = function(number)
	{
		return number*2;
	};

	var calculate = function() {
		var result = 0;
		while (this.Number1 !== 1) {
			this.Number1 = divideByTwo(this.Number1);
			this.Number2 = multiplyByTwo(this.Number2);

			if (this.Number1%2 !== 0)
			{
				result += this.Number2;
			}
			
		}

		console.log("THE RESULT: ", result);
		return { success: true, message: result };	
	};

	return {
		getCalculation: calculate
	}

}();

module.exports = peasantCalculator;