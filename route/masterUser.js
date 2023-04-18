const express = require('express');

const router  = express.Router()
const { addNewUser, getUser, updateUser, deleteUser } = require('../controller/masterUser');
const { addNewPermission, getPermission, updatePermission, deletePermission } = require('../controller/masterUserPermission');
const { addNewUserRoles, getUserRoles, updateUserRoles, deleteUserRoles } = require('../controller/masterUserRole');
const { verifyToken } = require('../model/jwt');

//masterUser
// add new user
router.post('/addNewUser', verifyToken, addNewUser);
// get user
router.post('/getUser', verifyToken, getUser);
// // update user
// router.put('/updateUser', verifyToken, updateUser);
// // delete user
// router.delete('/deleteUser', verifyToken, deleteUser);

//masterUserPermission
// add new permission
router.post('/addNewPermission', verifyToken, addNewPermission);
// get permission
router.post('/getPermission', verifyToken, getPermission);
// update permission
router.put('/updatePermission', verifyToken, updatePermission);
// delete permission
router.delete('/deletePermission', verifyToken, deletePermission);

//masterUserRoles
// add new userRoles
router.post('/addNewUserRoles', verifyToken, addNewUserRoles);
// get userRoles
router.post('/getUserRoles', verifyToken, getUserRoles);
// update userRoles
router.put('/updateUserRoles', verifyToken, updateUserRoles);
// delete userRoles
router.delete('/deleteUserRoles', verifyToken, deleteUserRoles);


module.exports = router;