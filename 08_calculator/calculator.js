const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(summing) {
	let sumsa = 0;
  summing.forEach(digit => {
    sumsa += digit;
  });
  return sumsa;
};

const multiply = function(mully) {
  let result = 1;
  mully.forEach(item => {
    result *= item;
  })
  return result;
};

const power = function(first, second) {
  let powering = first;
	for (let i = 1; i < second; i++) {
    powering *= first;
  }
  return powering;
};

const factorial = function(factor) {
  let result = 1;
	for (let i = 1; i <= factor; i++) {
    result *= i;
  }
  return result;
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
