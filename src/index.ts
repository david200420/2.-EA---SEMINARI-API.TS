import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'; 
<<<<<<< HEAD
import usuarioRoutes from './routes/usuarioRoutes'; 
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
=======
import eventoRoutes from './routes/eventoRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

>>>>>>> feature-evento

const app = express();
const PORT = 3000;

//////////////////////AQUI APLICAMOS LAS VARIABLES PARA EL MIDDLE WARE CORS//////////////////////
app.use(cors());
app.use(express.json() as express.RequestHandler); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
<<<<<<< HEAD
=======

>>>>>>> feature-evento

//////////////////////AQUI CONECTAMOS A LA BASE DE DATOS//////////////////////
mongoose.connect('mongodb://localhost:27017/BBDD')
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
<<<<<<< HEAD
app.use('/api/user', usuarioRoutes);


=======
app.use('/api/eventos', eventoRoutes);
>>>>>>> feature-evento
