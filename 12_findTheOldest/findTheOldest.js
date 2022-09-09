const findTheOldest = function(myObj) {
    const sorted = myObj.sort(function(a, b) {
        aDied = !a.yearOfDeath ? 2022 : a.yearOfDeath;
        bDied = !b.yearOfDeath ? 2022 : b.yearOfDeath;
        age1 = aDied - a.yearOfBirth;
        age2 = bDied - b.yearOfBirth;
        return age1 > age2 ? -1 : 1;
    })
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
