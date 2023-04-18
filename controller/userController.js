const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
const UserModel = require("../model/userModel")

const config = process.env;
dotenv.config();

exports.registerController = (req, res, next) => {
    const { USER_ID, 
            PASSWORD,
            ROLE,
            DEPT,
            CREATE_USER,
            CREATE_DATE,
            MODIFY_USER,
            MODIFY_DATE
        } = req.body;
    let hash = bcrypt.hash(PASSWORD, 10)
    hash.then((hash) => {
        const User ={
            USERID: USER_ID,
            PASSWORD: hash,
            ROLE: ROLE,
            DEPT: DEPT,
            CREATE_USER: CREATE_USER,
            CREATE_DATE: CREATE_DATE,
            MODIFY_USER: MODIFY_USER,
            MODIFY_DATE: MODIFY_DATE
        }
    let result = UserModel.registerUser(User)
        result.then((result) => {
            if(typeof(result) == 'object'){
                res.status(201)
                .json({
                    message:'success'
                })
            }
            else{
                res.status(500)
                .json({
                    message: result
                })
            }
            
        }).catch((error) => {
            res.status(500)
                .json({
                    message:error
                })
            })
        })
        .catch((error) => {
            res.status(500)
            .json({
                message:error
            })
        })
}

exports.loginController = (req, res, next) => {
    const { USER_ID='', PASSWORD} = req.body;
    UserModel.findUserByUserName(USER_ID)
        .then((rows) => {
            console.log("as",rows.rows);
            let row = rows.rows;
            if(row.length !== 0) {
                return bcrypt.compare(PASSWORD, row[0].PASSWORD)
                    .then((result) => {
                        if(!result) {
                            res.status(401)
                                .json({
                                    message: "Authentication failed"
                                })
                        } else {
                            let jwtToken = jwt.sign({
                                userId: row[0].USERID,
                                role: row[0].ROLE,
                                detp: row[0].DETP
                            }, 
                            config.TOKEN_KEY,
                            {
                                expiresIn: "24h"
                            },
                            );

                            res.status(200).json({
                                user: row[0].USERID,
                                role: row[0].ROLE,
                                detp: row[0].DETP,
                                accesstoken: jwtToken,
                                //expires in 1 day 3600 is 1 hour 24 is 1 day
                                expiresIn: 3600*24,
                            });
                        }
                    }).catch((error) => {
                        res.status(401)
                            .json({
                                message: "Authentication failed",
                                error:error
                            })
                    })
            } else {
                res.status(401)
                .json({
                    message: "Authentication failed"
                })
            }
        })
        .catch((error) => {
            res.status(500)
            .json({
                message:error
            })
        })
}