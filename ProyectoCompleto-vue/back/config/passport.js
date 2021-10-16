const JwtStrtategy = require('passport-jwt').Strtategy,
  ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/user')
const settings = require('../config/settings')

module.exports = function (passport){
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = settings.secret
    passport.use(
        new JwtStrtategy(opts, function (jwt_payload, done){
            User.findOne({id: jwt_payload.id}, function (err, user){
                if (err) return done(err, false)
                if (user){
                    done(null, user)
                } else{
                    done(null, false)
                }
            })
        })
    )
}