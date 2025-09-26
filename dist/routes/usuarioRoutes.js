"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController = __importStar(require("../controller/usuarioController"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para gestionar usuarios
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - username
 *         - gmail
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado por MongoDB
 *         username:
 *           type: string
 *         gmail:
 *           type: string
 *         password:
 *           type: string
 *         birthday:
 *           type: string
 *           format: date
 *       example:
 *         username: nombreUsuario
 *         gmail: primeraParteCorreo@example.com
 *         password: 123456
 *         birthday: 2000-05-21
 */
/**
 * @swagger
 * /user/createUser:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.post('/createUser', usuarioController.createUser);
/**
 * @swagger
 * /user/getAllUsers:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 * *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 */
router.get('/getAllUsers', usuarioController.getAllUsers);
/**
 * @swagger
 * /user/getUserById/{id}:
 *   get:
 *     summary: Obtener un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.get('/getUserById/:id', usuarioController.getUserById);
/**
 * @swagger
 * /user/updateUserByUsername/{username}:
 *   put:
 *     summary: Actualizar un usuario por nombre
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.put('/updateUserByUsername/:username', usuarioController.updateUserByUsername);
/**
 * @swagger
 * /user/deleteUserByUsername/{username}:
 *   delete:
 *     summary: Eliminar un usuario por nombre
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.delete('/deleteUserByUsername/:username', usuarioController.deleteUserByUsername);
exports.default = router;
