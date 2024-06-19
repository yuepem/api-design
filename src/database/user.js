const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const createUser = (newUser) => {
    try {
        const userEmailExists = DB.users.findIndex((user) => user.email === newUser.email);

        const userPhoneNumberExists = DB.users.findIndex((user) => user.phoneNumber === newUser.phoneNumber);

        if (userEmailExists > -1) {
            throw {
                status: 400,
                message: `User with the email ${newUser.email}  already exists`
            }
        } else if (userPhoneNumberExists > -1) {
            throw {
                status: 400,
                message: `User with the phone number ${newUser.phoneNumber} already exists`
            }
        }
        // write to database without returning anything
        DB.users.push(newUser);
        saveToDatabase(DB);

    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

module.exports = { createUser };