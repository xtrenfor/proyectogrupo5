import express from 'express';
const routerAgendas = express.Router();

const passport = require('passport')
require('../config/passport')(passport)

const getToken = function(headers){
    if (headers && headers.authorization){
        const parted = headers.authorization.split('')
        if (parted.legth === 2){
            return parted[1]
        } else {
            return null
        }
    } else {
        return null
    }
}

import Agendas from '../models/agendas';

routerAgendas.post('/agendas-nueva', async (req, res) => {
    const body = req.body;
    try {
        console.log("body:", body);
        const AgendasDB = await Agendas.create(body);
        res.status(200).json(AgendasDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


routerAgendas.get('/agendas/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const AgendasDB = await Agendas.findOne({ _id });
        res.json(AgendasDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerAgendas.get('/agendas', passport.authenticate('jwt', {session: false}), async (req, res) => {
    const token = getToken(req.headers)
    if (token){
        try {
            console.log("entra a buscar todas las agendas")
            const AgendasDB = await Agendas.find();
            res.json(AgendasDB)
        } catch (error) {
            console.log("catch: ", error);
            return res.status(500).json({
                mensaje: 'ocurrio un error',
                error: error
            })
        }
    } else {
        return res.status(403).send({success: false, msg: 'Sin Autorización!'})
    }



});

routerAgendas.delete('/agendas/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const AgendasDB = await Agendas.findByIdAndDelete({ _id });
        if (!AgendasDB) {
            return res.status(500).json({
                mensaje: 'no se encontro el id indicado',
                error
            })
        }
        res.json(AgendasDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerAgendas.put('/agendas/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const AgendasDB = await Agendas.findByIdAndUpdate(_id, body, { new: true });
        res.json(AgendasDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


module.exports = routerAgendas;

