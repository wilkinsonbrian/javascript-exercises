const removeFromArray = function(arr, ...remove) {
    newArr = [];
    for (let i=0; i<arr.length; i++) {
        if (!remove.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
