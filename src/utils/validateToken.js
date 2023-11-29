const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {

    const token = req.header('Authorization');
    if(!token) return res.status(401).json({ message: 'Unauthorized' })

    try {
        const { username } = jwt.verify(token, process.env.SECRET_KEY);
        req.username = username
        if(!username) return res.status(401).json({ message: 'Unauthorized' })

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = validateToken;