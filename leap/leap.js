var isYearDivisibleByNumber = function(year, number) {
	return year % number === 0;
}

var isYearDivisibleBy4AndNotBy100 = function(year) {
	return (isYearDivisibleByNumber(year, 4) && !isYearDivisibleByNumber(year, 100));
}

var isYearDivisibleBy100And400 = function(year) {
	return (isYearDivisibleByNumber(year, 100) && isYearDivisibleByNumber(year, 400));
}

class Year {
	constructor(year){
		this.year = year;
	}

    isLeap(year) {
		return ((isYearDivisibleBy4AndNotBy100(this.year)) || (isYearDivisibleBy100And400(this.year)));
    }
}

module.exports = Year;