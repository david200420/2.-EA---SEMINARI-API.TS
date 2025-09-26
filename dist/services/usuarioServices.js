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
exports.UserService = void 0;
const usuario_1 = require("../models/usuario");
const mongoose_1 = require("mongoose");
class UserService {
    // Crear un nuevo usuario y si hay algun error que lo lanza
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new usuario_1.Usuario(user);
                return yield newUser.save();
            }
            catch (error) {
                throw new Error('ERROR AL CREAR EL USUARIO: ' + error.message);
            }
        });
    }
    // Obtener todos los usuarios
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield usuario_1.Usuario.countDocuments()) === 0) {
                throw new Error('NO HAY USUARIOS EN LA BASE DE DATOS');
            }
            return yield usuario_1.Usuario.find();
        });
    }
    // Obtener un usuario por ID
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
            }
            return yield usuario_1.Usuario.findById(id);
        });
    }
    // Buscar usuario por username
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username) {
                throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
            }
            return yield usuario_1.Usuario.findOne({ username });
        });
    }
    // Actualizar un usuario por ID
    updateUserById(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
            }
            return yield usuario_1.Usuario.findByIdAndUpdate(id, user, { new: true });
        });
    }
    // Actualizar un usuario por username
    updateUserByUsername(username, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username) {
                throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
            }
            return yield usuario_1.Usuario.findOneAndUpdate({ username }, user, { new: true });
        });
    }
    // Eliminar un usuario por ID
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                throw new Error('NO HAY NINGUN USUARIO CON ESE ID');
            }
            return yield usuario_1.Usuario.findByIdAndDelete(id);
        });
    }
    // Eliminar un usuario por username
    deleteUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username) {
                throw new Error('USERNAME NO PROPORCIONADO O INCORRECTO');
            }
            return yield usuario_1.Usuario.findOneAndDelete({ username });
        });
    }
}
exports.UserService = UserService;
