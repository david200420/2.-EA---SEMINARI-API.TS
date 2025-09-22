import { Router } from 'express';
import * as usuarioController from '../controller/usuarioController';


const router = Router();

///////////////////////////RUTA PARA CREAR UN USUARIO////////////////////
router.post('/usuarios', usuarioController.createUser);

///////////////////////////RUTAS PARA OBTENER USUARIOS////////////////////
router.get('/usuarios', usuarioController.getAllUsers);
router.get('/usuarios/id/:id', usuarioController.getUserById);
router.get('/usuarios/username/:username', usuarioController.getUserByUsername);

////////////////////////////RUTAS PARA ACTUALIZAR USUARIOS//////////////////// 
router.put('/usuarios/id/:id', usuarioController.updateUserById);
router.put('/usuarios/username/:username', usuarioController.updateUserByUsername);

///////////////////////////RUTAS PARA ELIMINAR USUARIOS////////////////////
router.delete('/usuarios/id/:id', usuarioController.deleteUserById);
router.delete('/usuarios/username/:username', usuarioController.deleteUserByUsername);

export default router;


