const sumAll = function(begin, end) {
    if (begin < 0 || end < 0) {
        return "ERROR";
    }

    if (typeof begin != "number" || typeof end != "number") {
        return "ERROR";
    }

    if (begin > end) {
        let temp = end;
        end = begin;
        begin = temp;
    }

    let val = 0;
    for (let i=begin; i<=end; i++) {
        val += i;
    }
    return val;

};

// Do not edit below this line
module.exports = sumAll;
