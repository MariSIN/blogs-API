const { verifyToken } = require('../auth/token');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
        message: 'Token not found',
    });
  }

  try {
    const decoded = verifyToken(authorization);
    req.userToken = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token', err });
  }

  next();
};

module.exports = {
validateToken,
};
