import express from 'express';
const routercliente = express.Router();

import Cliente from '../models/Cliente'

routercliente.post( '/Cliente-nueva', async (req, res)=>{

    const body= req.body;

    try{

        const ClienteDB= await Cliente.create(body);
        res.status(200).json(ClienteDB);
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


routercliente.get('/Cliente/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const ClienteDB= await Cliente.findOne({_id});
        res.json(ClienteDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routercliente.get('/Cliente', async (req, res)=>{


    try{

        const ClienteDB= await Cliente.find();
        res.json(ClienteDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routercliente.delete('/Cliente/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const ClienteDB= await Cliente.findByIdAndDelete({_id});
        if (!ClienteDB){
            return res.status(500).json({
                mensaje: 'no se encontro el id indicado',
            error
        })

    
    }
    res.json(ClienteDB)
        
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routercliente.put('/Cliente/:id', async (req, res)=>{

    const _id = req.params.id;
    const body = req.body;

    try{

        const ClienteDB= await Cliente.findByIdAndUpdate(_id, body, {new: true});
    res.json(ClienteDB);

    
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


module.exports = routercliente; 

