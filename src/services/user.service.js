const { User } = require('../models');
const { token } = require('../auth/token');

const login = (email, password) => token({ email, password });

const createUser = ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });

const getUser = () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => User.findByPk(id, { 
    attributes: {
    exclude: ['password'], 
    },
});

module.exports = { 
    login, 
    createUser,
    getUser,
    getUserById,
 };
