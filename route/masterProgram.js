const express = require('express');

const router  = express.Router()
const { verifyToken } = require('../model/jwt');

const { addNewProgram, getProgram, updateProgram, deleteProgram, getProgramByRole } = require('../controller/masterProgram');

//masterProgram
// add new program
router.post('/addNewProgram', verifyToken, addNewProgram);
// get program
router.post('/getProgram', verifyToken, getProgram);
// update program
router.put('/updateProgram', verifyToken, updateProgram);
// delete program
router.delete('/deleteProgram', verifyToken, deleteProgram);
// get program by role
router.post('/getProgramByRole', verifyToken, getProgramByRole);

module.exports = router;