const reverseString = function(string) {
    let aux = "";
    for (let i = (string.length - 1); i >= 0; i--){
        aux += string.substr(i,1);
    }
    return aux
};

// Do not edit below this line
module.exports = reverseString;
