const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = (data) => {

    let result = data.payload;
    const errors = {};
    const fields = [
        "name",
        "participants",
        "themeskind",
        "themescontent",
        "date",
        "address",
        "city",
    ];

    for (const field of fields) {
        result[field] = !isEmpty(result[field]) ? result[field] : "";
    }

    // Name
    if (!Validator.isLength(result.name, {min:3})) {
        errors.name = "Name must contains at least 3 letters.";
    }

    //
    // Empty fields validator
    for (const field of fields) {
        if (Validator.isEmpty(result[field])) {
        errors[field] = `${
            field[0].toUpperCase() + field.slice(1)
        } field is required.`;
        }
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
}