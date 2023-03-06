const { token } = require('../auth/token');

const login = async (email, password) => { 
    const validToken = token({ email, password });
    return validToken;
};

module.exports = { login };