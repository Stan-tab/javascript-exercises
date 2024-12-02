const findTheOldest = function(list) {
    let data = new Date();
    const year = data.getFullYear();
    list.forEach(current => {
        if (!isNaN(current.yearOfDeath)) {current.liveTime = current.yearOfDeath - current.yearOfBirth;}
        else{current.liveTime = year - current.yearOfBirth;}
    });
    num = list.reduce((ac, item) => {
        if (ac >=  item.liveTime) {
            return ac;
        } else {
            return item.liveTime;
        }
    }, 1)
    return list.find((item) => item.liveTime == num);
};

// Do not edit below this line
module.exports = findTheOldest;
