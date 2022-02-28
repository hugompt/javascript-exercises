//Get the variable to analize
//Create an array with spaces and punctuation removed
//Create a loop to assemble the string backwards
//Compare initial string with string from loop
//Return true if they match or false if they don't

const palindromes = function (paliString) {
    let initialString = paliString.replace(/[^a-zA-Z0-9]/g, '');
    initialString = initialString.toLowerCase();
    let finalString = "";

    for (i = initialString.length; i >= 0 ; i--){
        finalString += initialString.charAt(i); 
    }
    if (finalString == initialString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
