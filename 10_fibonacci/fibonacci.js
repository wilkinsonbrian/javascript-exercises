const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) return "OOPS";
    if (num <=2) return 1;
    a = 1;
    b = 1;
    while (num-2 > 0) {
        c = a + b;
        a = b;
        b = c;
        num--;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
