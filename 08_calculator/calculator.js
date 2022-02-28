//add, subtract, get the sum, multiply, get the power, and find the factorial

const add = function(numb1, numb2) {
	return numb1+numb2;
};

const subtract = function(numb1, numb2) {
	return numb1-numb2;
};

const sum = function(array1) {
  let arraySum = 0;
	for (i = 0; i < array1.length; i++){
    arraySum += array1[i];
  }
  return arraySum
};

const multiply = function(numbersMulti) {
  let arrayMulti = 1;
  let i = 0;

  while (i < (numbersMulti.length)){
    arrayMulti = arrayMulti * numbersMulti[i];
    i++;
  }
  return arrayMulti
};

const power = function(numb1, numb2) {
	let power = 1
  for (i = numb2; i > 0 ; i--){
    power = power * numb1;
  }
  return power
};

const factorial = function() {
	
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
