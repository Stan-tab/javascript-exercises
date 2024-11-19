const repeatString = function(words, repeats) {
    let sentense = '';
    if (repeats<0) {return "ERROR"}
    for (let i=1; i<=repeats; i++){
        sentense += words;
    }
    return sentense
};

// Do not edit below this line
module.exports = repeatString;
