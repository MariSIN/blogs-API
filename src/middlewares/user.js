const { User } = require('../models');

const validateName = async (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const validEmail = emailRegex.test(email);

    if (!validEmail) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }

    const findUser = await User.findOne({ where: { email } });

    if (findUser) {
        return res.status(409).json({
            message: 'User already registered',
        });
    }  
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }
    next();
};

module.exports = {
     validateName, 
     validateEmail, 
     validatePassword, 
    };
