const fibonacci = function(fiboNum) {
    let num1 = 0;
    let num2 = 1;
    let fibo = 0;

    if (fiboNum >= 0) {
        for (i = 1; i < fiboNum; i++){
            fibo = num1 + num2;
            num1 = num2;
            num2 = fibo;
        }
        return num2;
    }else return "OOPS";    
};

// Do not edit below this line
module.exports = fibonacci;
