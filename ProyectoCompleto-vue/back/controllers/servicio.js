import express from 'express';
const routerservicio = express.Router();

import servicio from '../models/servicio'

routerservicio.post( '/servicio-nueva', async (req, res)=>{

    const body= req.body;

    try{

        const servicioDB= await servicio.create(body);
        res.status(200).json(servicioDB);
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


routerservicio.get('/servicio/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const servicioDB= await servicio.findOne({_id});
        res.json(servicioDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerservicio.get('/servicio', async (req, res)=>{


    try{

        const servicioDB= await servicio.find();
        res.json(servicioDB)
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerservicio.delete('/servicio/:id', async (req, res)=>{

    const _id = req.params.id;

    try{

        const servicioDB= await servicio.findByIdAndDelete({_id});
        if (!servicioDB){
            return res.status(500).json({
                mensaje: 'no se encontro el id indicado',
            error
        })

    
    }
    res.json(servicioDB)
        
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

routerservicio.put('/servicio/:id', async (req, res)=>{

    const _id = req.params.id;
    const body = req.body;

    try{

        const servicioDB= await servicio.findByIdAndUpdate(_id, body, {new: true});
    res.json(servicioDB);

    
    
    } catch (error) {

        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


module.exports = routerservicio; 

