const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const token = (payload) => jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256',
    });

const verifyToken = (tk) => jwt.verify(tk, JWT_SECRET); 

module.exports = { token, verifyToken };