const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}

module.exports = connect