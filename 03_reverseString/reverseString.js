const reverseString = function(string) {
    let stringToReturn = "";
    for (let i=1; i <= string.length; i++) {
        stringToReturn += string[string.length-i]
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = reverseString;
