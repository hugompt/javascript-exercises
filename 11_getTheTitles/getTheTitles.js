const getTheTitles = function(books) {
    let booksTitles = books.map(function(element){
        return `${element.title}`
    })
    return booksTitles
};

// Do not edit below this line
module.exports = getTheTitles;
