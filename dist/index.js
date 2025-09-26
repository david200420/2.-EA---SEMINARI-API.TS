"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./config/swagger"));
const app = (0, express_1.default)();
const PORT = 3000;
//////////////////////AQUI APLICAMOS LAS VARIABLES PARA EL MIDDLE WARE CORS//////////////////////
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
//////////////////////AQUI CONECTAMOS A LA BASE DE DATOS//////////////////////
mongoose_1.default.connect('mongodb://localhost:27017/BBDD')
    .then(() => {
    console.log('CONEXION EXITOSA A LA BASE DE DATOS DE MONGODB');
    app.listen(PORT, () => {
        console.log(`URL DEL SERVIDOR http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.error('HAY ALGUN ERROR CON LA CONEXION', err);
});
//////////FALTAN PONER LAS RUTAS: ALGO TIPO app.routes()//////////////////////
app.use('/api/user', usuarioRoutes_1.default);
