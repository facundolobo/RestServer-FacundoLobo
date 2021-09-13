const { Router } = require('express');
const { 
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete } = require('../controllers/usuarios');

const router = Router();

//cada una de las rutas

    router.get('/', usuariosGet)
 
    router.put('/:id', usuariosPut)

    router.post('/', usuariosPost)

    router.delete('/:id', usuariosDelete)

    router.patch('/', usuariosPatch)

//------------------

module.exports = router;