const removeFromArray = function(arraychik, ...args) {
    let newArray = [];
    // arraychik.forEach((item) => {
    //     if (!args.includes(item)) {
    //         newArray.push(item)
    //     }
    // });
    // return newArray
    // I have failed for this task
    for (i of arraychik) {
        if (!args.includes(i)){
            newArray.push(i)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
