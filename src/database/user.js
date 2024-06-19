const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const bcrypt = require('bcryptjs');

const JWT = require('jsonwebtoken');

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

const loginUser = (phoneNumber, password) => {
    try {
        const { user } = DB.users.find((user) => user.phoneNumber === phoneNumber);

        if (!user) {
            throw {
                status: 400,
                message: `User with the phone number ${user.phoneNumber} does not exist`
            }
        }

        const validPassword = bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw {
                status: 400,
                message: `Password is incorrect`
            }
        }

        // generate token
        const token = JWT.sign({
            userId: user.id,
            userName: user.userName
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        return token;

    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || "An error occurred during login"
        };
    }

}




module.exports = { 
    createUser, 
    loginUser
 };