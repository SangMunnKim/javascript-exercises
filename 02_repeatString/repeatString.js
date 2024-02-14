const repeatString = function(string, timesToRepeat) {
    let stringToReturn = '';
    if (timesToRepeat < 0) {
        return 'ERROR';
    }
    for (let i =0; i < timesToRepeat; i++) {
        stringToReturn += string;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
