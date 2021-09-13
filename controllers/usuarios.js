const { response, request } = require('express');

const usuariosGet = (req= request, res=response ) => {

    const {q, nombre, edad} = req.query;

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        edad
    })
}
const usuariosPost = (req, res=response ) => {

    const {nombre, edad} = req.body;

    res.json({
        msg:'post API - controlador',
        nombre,
        edad
    })
}
const usuariosPut = (req, res=response ) => {
    
    const { id } = req.params;
    const { nombre, edad } = req.body;

    res.json({
        msg:'put API - controlador',
        id,
        nombre,
        edad
    })
}
const usuariosPatch = (req, res=response ) => {
    res.json({
        msg:'patch API - controlador'
    })
}

const usuariosDelete = (req, res=response ) => {
    const { id } = req.params;
    res.json({
        msg:'delete API - controlador',
        id
    })
}


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}