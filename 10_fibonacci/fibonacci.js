const fibonacci = function(fiboNum) {
    let counter = 0;
    let n1 = 0;
    let n2 = 1 ;
    for (i = 0; i < fiboNum; i++){
        if (fiboNum === 1){
            return fiboNum;
        }else{
            counter += n1 + n2; 
            console.log(counter + " " + i);
        }
    }
    return counter;
};

// Do not edit below this line
module.exports = fibonacci;
