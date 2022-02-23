const repeatString = function (string, num) {
let aux = string.toString();
    if (num > 0){    
        for (; num > 1; --num){
            aux += string;
        }
        return aux
    }else if(num === 0){
        return ""
    }else if(num < 0){
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
