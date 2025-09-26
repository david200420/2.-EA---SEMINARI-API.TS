"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.getUserByUsername = getUserByUsername;
exports.updateUserById = updateUserById;
exports.updateUserByUsername = updateUserByUsername;
exports.deleteUserById = deleteUserById;
exports.deleteUserByUsername = deleteUserByUsername;
const usuarioServices_1 = require("../services/usuarioServices");
const express_validator_1 = require("express-validator");
const userService = new usuarioServices_1.UserService();
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('crear usuario');
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { username, gmail, password, birthday } = req.body;
            const newUser = { username, gmail, password, birthday };
            const user = yield userService.createUser(newUser);
            return res.status(201).json({
                message: 'USUARIO CREADO CON EXITO',
                user
            });
        }
        catch (error) {
            return res.status(500).json({ error: 'FALLO AL CREAR EL USUARIO' });
        }
    });
}
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('obtener todos los usuarios');
        try {
            const users = yield userService.getAllUsers();
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('obtener usuario por id');
        try {
            const { id } = req.params;
            const user = yield userService.getUserById(id);
            if (!user) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
function getUserByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('obtener usuario por username');
        try {
            const { username } = req.params;
            const user = yield userService.getUserByUsername(username);
            if (!user) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
function updateUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('actualizar usuario por id');
        try {
            const { id } = req.params;
            const userData = req.body;
            const updatedUser = yield userService.updateUserById(id, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(updatedUser);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
function updateUserByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('actualizar usuario por username');
        try {
            const { username } = req.params;
            const userData = req.body;
            const updatedUser = yield userService.updateUserByUsername(username, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(updatedUser);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
function deleteUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('eliminar usuario por id');
        try {
            const { id } = req.params;
            const deletedUser = yield userService.deleteUserById(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(deletedUser);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
function deleteUserByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = req.params;
            const deletedUser = yield userService.deleteUserByUsername(username);
            if (!deletedUser) {
                return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' });
            }
            return res.status(200).json(deletedUser);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
}
