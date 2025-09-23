import { Router } from 'express';
import * as usuarioController from '../controller/usuarioController';

const router = Router();

/////////////////////////// RUTA PARA CREAR UN USUARIO ////////////////////
router.post('/crearUsuario', usuarioController.createUser);

/////////////////////////// RUTAS PARA OBTENER USUARIOS ///////////////////
router.get('/', usuarioController.getAllUsers);                 // Obtener todos
router.get('/obtenerPorId', usuarioController.getUserById);    // ID desde body
router.get('/obtenerPorNombre', usuarioController.getUserByUsername); // username desde body

/////////////////////////// RUTAS PARA ACTUALIZAR USUARIOS ///////////////
router.put('/actualizarPorId/:id', usuarioController.updateUserById);
router.put('/actualizarPorNombre/:username', usuarioController.updateUserByUsername);

/////////////////////////// RUTAS PARA ELIMINAR USUARIOS //////////////////
router.delete('/eliminarPorId', usuarioController.deleteUserById);        // ID desde body
router.delete('/eliminarPorNombre', usuarioController.deleteUserByUsername); // username desde body

export default router;
