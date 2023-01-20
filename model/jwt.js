const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const config = process.env;

dotenv.config();

const verifyToken = (req, res, next) => {
    const tokenString = req.body.token || req.query.token || req.headers.authorization;
    const token = tokenString.split('Bearer ')[1]

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    else{
        try {
            const verify = jwt.verify(token, config.TOKEN_KEY);
            req.user = verify;
        } catch (err) {
            console.log(err);
            return res.status(401).send("Invalid Token");
        }
    }
    return next();
};

module.exports = {verifyToken};