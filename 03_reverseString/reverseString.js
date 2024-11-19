const reverseString = function(reversed) {
    arrayer = []
    for (i of reversed) {
        arrayer.unshift(i)
    }
    
    return arrayer.join("")
};

// Do not edit below this line
module.exports = reverseString;
