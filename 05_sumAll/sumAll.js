const sumAll = function(first, second) {
    let result = 0;
    if (first<0 || second<0) {
        return "ERROR"
    }
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR"
    }
    if (first > second) {
        for (let x = second; x<=first; x++) {
            result += x
        }
    } else {
        for (let x = first; x<=second; x++) {
            result += x
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
