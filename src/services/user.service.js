const { User } = require('../models');
const { token } = require('../auth/token');

const login = async (email) => {
    const findUser = await User.findOne({ where: { email } });
    const userId = findUser.dataValues.id;
    const validToken = token({ userId, email });
    return validToken;
};

const createUser = ({ displayName, email, password, image }) =>
    User.create({ displayName, email, password, image });

const getUser = () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = (id) =>
    User.findByPk(id, {
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
