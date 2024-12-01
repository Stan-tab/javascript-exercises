const fibonacci = function(number) {
    if (+number == 0) {return 0}
    if (+number < 0 || !Number.isInteger(+number)) {return "OOPS"}
    let arr = [1, ];
    for (let i = 2; i <= +number; i++) {
        arr.push(+arr.slice(-2, -1) + +arr.slice(-1));
    }
    return +arr.slice(-1);
};

// Do not edit below this line
module.exports = fibonacci;
