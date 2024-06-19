const userService = require('../services/userService');

const registerUser = (req, res) => {

    const { firstName, lastName, email, phoneNumber, address, userName, password } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !address || !userName || !password) {
        return res.status(400).send({
            status: 'FAILED',
            data: { error: "All fields are required!" }
        })
    };

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        userName: userName,
        password: password
    }

    try {
        // call the service without returning anything
        userService.createUser(newUser);
        
        res.status(201).send({ status: 'OK', message: 'User registered successfully!' });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    };
};

module.exports = { registerUser };