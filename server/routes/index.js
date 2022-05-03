var express = require('express');
const { Register, Login, Logout, GetInformations, UpdateInformation} = require('../controllers/Users.controller');
var router = express.Router();
const auth = require('../middleware/auth')


// routes for inscription 
router.post('/inscrire', Register)

//Route for Login 
router.post('/login', Login)

//route to get information about the user 
router.post('/userinfo', GetInformations)

//route to update information
router.put('/updateUser', auth, UpdateInformation)

//Route for Logout
router.get('/logout', auth,Logout)
module.exports = router;
