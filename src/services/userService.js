const user = require('../database/user');

const { v4: uuid } = require('uuid');

const bcrypt = require('bcryptjs');


const createUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
        password: bcrypt.hash(newUser.password, 8)
    }

    try {
        // call the service without returning anything
        user.createUser(userToInsert);
        
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser };