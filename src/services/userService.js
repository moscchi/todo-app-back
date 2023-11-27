const bcrypt =require('bcryptjs')
const UserModel = require('../models/users.models')
const registerService = async (req, res) => {
    try {
        const { username, password} = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);
        const newUser = new UserModel({ username, password: hashPassword });
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = registerService;