const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

// Create (POST) -- creates a new user, hashing their password before saving to DB
router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email 
    }).then(user => {
        if(user){
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                roomId: '',
                reserveStartDate: '',
                reserveEndDate: ''
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                });
            });
        }
    });
});

// Index (GET) -- find user, allow login
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {

        if(!user){
            return res.status(404).json({ emailnotfound: 'Email not found.'});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
     
                const payload = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    roomId: user.roomId,
                    reserveStartDate: user.reserveStartDate,
                    reserveEndDate: user.reserveEndDate
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        });
                    }
                );
            } else {
                return res.status(400).json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

router.put('/update', (req, res) => {

    const email = { email: req.body.email };
    const booking = { 

        email: req.body.email,
        roomId: req.body.roomId,
        reserveStartDate: req.body.reserveStartDate,
        reserveEndDate: req.body.reserveEndDate
     };

    User.findOneAndUpdate(email, booking, { returnOriginal: false }, (err, update) => {
        if(err) {
            console.log("Error")
        } else {
            console.log( "Updated" ); 
            console.log(update)
            res.json({ update });
    }});
})

router.delete('/update', (req, res) => {

    const email = { email: req.body.email };

    User.findOneAndDelete(email, (err, update) => {
        if(err) {
            console.log("Error")
        } else res.redirect("/")
    });
})



module.exports = router;