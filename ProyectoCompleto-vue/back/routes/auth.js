const passport = require('passport')
const settings = require('../config/settings')

require('../config/passport')(passport)

const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')
const { json } = require('express')

router.post('/register', function(req, res){
    if (!req.body.username || !req.body.password){
        res.json({success: false, msg: 'El usuario y la contraseña son obligatorios!'})
    } else {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })

        newUser.save(function(err){
            if (err) return res.json({success: false, msg: `El usuario ${req.body.username} ya existe!`})
            return res.json({success: true, msg: `El usuario ${req.body.username} se ha registrado exitosamente!`})
        })
    }
})

router.post('/login', function (req, res){
    User.findOne({username: req.body.username},
        function (err, user){
            if (err) throw err
            if (!user){
                res
                    .status(401)
                    .send({success: false, msg: 'Autenticación fallida. Usuario no existe en la BD!'})
            } else {
                user.comparePassword(req.body.password, function (err, isMatch){
                    if (isMatch && !err){
                        const token = jwt.sign(user.toJSON(), settings.secret)
                        res.json({success: true, token: 'JWT ' + token})
                    } else {
                        res
                            .status(401)
                            .send({success: false, msg: 'Autenticación fallida. contraseña incorrecta!'})
                    }
                })
            }
        })
})

module.exports = router