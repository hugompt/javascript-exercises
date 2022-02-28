const fibonacci = function(fiboNum) {
    let counter = 0;
    for (i = 1; i <= fiboNum; i++){
        console.log(counter + " 1");
        counter += counter + (i-1); 
        console.log(counter + " 2");
    }
    return counter;
};

// Do not edit below this line
module.exports = fibonacci;
