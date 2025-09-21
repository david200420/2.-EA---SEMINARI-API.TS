import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'; 
import eventoRoutes from './routes/eventoRoutes';


const app = express();
const PORT = 3000;

//////////////////////AQUI APLICAMOS LAS VARIABLES PARA EL MIDDLE WARE CORS//////////////////////
app.use(cors());
app.use(express.json());

app.use('/', eventoRoutes);

// Comprobacion rapida
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

//////////////////////AQUI CONECTAMOS A LA BASE DE DATOS//////////////////////
mongoose.connect('mongodb://localhost:27017/BBDD')
    .then(() => {
        console.log('CONEXION EXITOSA A LA BASE DE DATOS DE MONGODB'); 
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('HAY ALGUN ERROR CON LA CONEXION', err);
    });
