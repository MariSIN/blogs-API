const { createUser, login, getUser } = require('../services/user.service');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    await createUser({ displayName, email, password, image });
    const token = await login(email, password);

    return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
    const user = await getUser();

    return res.status(200).json(user); 
};

module.exports = {
    addUser,
    getUsers,
};