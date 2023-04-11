const { User } = require('../models');
const { token } = require('../auth/token');

const login = async (email) => {
    const findUser = await User.findOne({ where: { email } });
    const userId = findUser.dataValues.id;
    const validToken = token({ userId, email });
    return validToken;
};

const createUser = async ({ displayName, email, password, image }) =>
    User.create({ displayName, email, password, image });

const getUser = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) =>
    User.findByPk(id, {
        attributes: {
            exclude: ['password'],
        },
    });

const deleteUser = async (id) => User.destroy({
    where: { id },
}); 

module.exports = {
    login,
    createUser,
    getUser,
    getUserById,
    deleteUser,
};
