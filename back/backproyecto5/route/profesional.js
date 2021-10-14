import express from 'express';
const routerprofesional = express.Router();

import profesional from '../models/profesional'

routerprofesional.post( '/profesional-nueva', async (req, res)=>{

    const body= req.body;

    try{

        const profesionalDB= await profesional.create(body);
        res.status(200).json(profesionalDB);
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


routerprofesional.get('/profesional/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const profesionalDB= await profesional.findOne({_id});
        res.json(profesionalDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerprofesional.get('/profesional', async (req, res)=>{


    try{

        const profesionalDB= await profesional.find();
        res.json(profesionalDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerprofesional.delete('/profesional/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const profesionalDB= await profesional.findByIdAndDelete({_id});
        if (!profesionalDB){
            return res.status(500).json({
                mensaje: 'no se encontro el id indicado',
            error
        })

    
    }
    res.json(profesionalDB)
        
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerprofesional.put('/profesional/:id', async (req, res)=>{

    const _id = req.params.id;
    const body = req.body;

    try{

        const profesionalDB= await profesional.findByIdAndUpdate(_id, body, {new: true});
    res.json(profesionalDB);

    
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


module.exports = routerprofesional; 

