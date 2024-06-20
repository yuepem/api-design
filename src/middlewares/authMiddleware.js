const JWT = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }

    JWT.verify(
        token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Access token is missing or invalid' });
            }

            req.user = user;
            next();
        }
    )
}

module.exports = { authenticateJWT };