const removeFromArray = function(array, remove, remove2, remove3, remove4) {
    remove = remove || null;
    remove2 = remove2 || null;
    remove3 = remove3 || null;
    remove4 = remove4 || null;
    let indexRemove = [remove, remove2, remove3, remove4];
    let aux1 = indexRemove.filter((a) =>a);
    aux1.sort(function(a,b){ return b - a; });

    for(let i = 0; i <= (aux1.length); i++){
        if(typeof(aux1[0]) === 'number' && array.indexOf(aux1[0]) != -1){
            array.splice((array.indexOf(aux1[0])),1);
        }
        aux1.shift();
    }
    return array;
};
removeFromArray([1, 2, 3, 4], 7, "tacos");
// Do not edit below this line
module.exports = removeFromArray;
