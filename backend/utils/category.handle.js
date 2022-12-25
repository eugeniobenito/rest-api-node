const setCategory = (age) => {
    let category = "menor"
    if (age>=15 && age<=17) {
        category = "cadete";
    }
    else if (age>=18 && age<=19) {
        category = "junior";
    }
    else if (age>=20 && age<=23) {
        category = "sub23";
    }
    else if (age>=24) {
        category = "absoltuto";
    }

    return category;
}

module.exports = setCategory;