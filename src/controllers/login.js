const { login } = require('../services/user.service');

const validLogin = async (req, res) => {
    const { email, password } = req.body;
    
    const token = await login(email, password);

    return res.status(200).json({ token });
};

module.exports = { 
    validLogin, 
};