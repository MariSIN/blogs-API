const { User } = require('../models');
const { token } = require('../auth/token');

const login = (email, password) => token({ email, password });

const createUser = ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });

module.exports = { 
    login, 
    createUser,
 };
