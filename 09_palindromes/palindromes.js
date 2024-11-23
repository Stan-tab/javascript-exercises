const palindromes = function (someText) {
    someText = someText.toLowerCase();
    let comparor = [];
    let array = someText.split("");
    let reversed = array.filter(item => {
        if (item.includes(",") || item.includes(".") || item.includes("!") || item.includes("?") || item.includes(" ")) {
            return false;
        }
        return true;
    })
    let newArray = reversed.slice(0)
    reversed.reverse();
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[i] == newArray[i]) {
            comparor.push(true);
        }
    }
    if (comparor.length == reversed.length) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
//palindromes("A car, a man, a maraca.");
