const { 
    createUser, 
    login, 
    getUser, 
    getUserById } = require('../services/user.service');

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

const getById = async (req, res) => {
    const { id } = req.params;

    const userId = await getUserById(id);

    return res.status(200).json(userId);
};

module.exports = {
    addUser,
    getUsers,
    getById,
};