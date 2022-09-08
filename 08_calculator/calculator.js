const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myArr) {
	const totalSum = myArr.reduce((prevVal, nextVal) => prevVal + nextVal, 0);
  return totalSum;
};

const multiply = function(myArr) {
  const totalProd = myArr.reduce((prevVal, nextVal) => prevVal * nextVal, 1);
  return totalProd;
};

const power = function(base, exp) {
  if (exp === 0) return 1;
  else return base * power(base, exp-1);
	
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
