//Alternative 1
// const removeFromArray = function(array, ...args) {
//     const newArray = [];
//     for (item of array) {
//         if (!args.includes(item)) {
//             newArray.push(item)
//         }
//     }
//     return newArray;
// };
//Alternative 2
const removeFromArray = function(array, ...args) {
    const newArray = array.filter((item) => (!args.includes(item)));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
