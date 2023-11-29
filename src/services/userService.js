const bcrypt =require('bcryptjs')
const UserModel = require('../models/users.models');
const generateJWT = require('../utils/generateJWT');

const loginService = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if(!user) return res.status(400).json({ message: 'Username or password incorrect' });

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if(!isValidPassword) return res.status(400).json({ message: 'Username or password incorrect' });

        const token = generateJWT(user.username);
        return res.status(200).json({ message: 'User logged successfully', token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

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

module.exports = {
    registerService,
    loginService
};