const { createUser } = require('../services/user.service');
const { login } = require('../services/user.service');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    await createUser({ displayName, email, password, image });
    const token = await login(email, password);

    return res.status(201).json({ token });
};

module.exports = {
    addUser,
};