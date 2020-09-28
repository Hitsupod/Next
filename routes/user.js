const User = require('../Server/database/models/user')
const passport = require('../Server/passport')
const express = require('express')
const router = express.Router()


router.post('/Signup', (req, res) => {
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('Error: ', err)
        } else if (user) {
            res.json({
                error: `Username ${username} is taken.`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('Logged In: ', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('User')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

module.exports = router