const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
}