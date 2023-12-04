const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/register', (req, res) =>{
    let {password, email} = req.body;

    // generate salt and hash password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            
        });
    });
})

module.exports = router;