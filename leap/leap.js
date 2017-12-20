var Year = function (input) {
	this.value = input;  
};

Year.prototype.isLeap = function () {
	return ((isYearDivisibleBy4AndNotBy100(this.value)) || (isYearDivisibleBy100And400(this.value)));
};

var isYearDivisibleByNumber = function(year, number) {
	return year % number === 0;
}

var isYearDivisibleBy4AndNotBy100 = function(year) {
	return (isYearDivisibleByNumber(year, 4) && !isYearDivisibleByNumber(year, 100));
}

var isYearDivisibleBy100And400 = function (year) {
	return (isYearDivisibleByNumber(year, 100) && isYearDivisibleByNumber(year, 400));
}

module.exports = Year;
