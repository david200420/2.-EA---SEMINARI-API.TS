import express from 'express';
import {
  saveMethodHandler,
  createEventoHandler,
  getAllEventosHandler,
  getEventoByIdHandler,
  updateEventoHandler,
  deleteEventoHandler
} from '../controller/eventoController';

const router = express.Router();

/**
 * @openapi
 * /api/main:
 *   get:
 *     summary: Página de bienvenida
 *     tags: [Main]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/main', saveMethodHandler);

/**
 * @openapi
 * /api/eventos:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, schedule]
 *             properties:
 *               name: { type: string, example: "Seminario Node" }
 *               schedule: { type: string, example: "16:30 - 17:30" }
 *               address: { type: string, example: "Aula 3, Edificio A" }
 *     responses:
 *       201: { description: Creado }
 */
router.post('/eventos', createEventoHandler);

/**
 * @openapi
 * /api/eventos:
 *   get:
 *     summary: Lista todos los eventos
 *     tags: [Eventos]
 *     responses:
 *       200: { description: OK }
 */
router.get('/eventos', getAllEventosHandler);

/**
 * @openapi
 * /api/eventos/{id}:
 *   get:
 *     summary: Obtiene un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: OK }
 *       404: { description: No encontrado }
 */
router.get('/eventos/:id', getEventoByIdHandler);

/**
 * @openapi
 * /api/eventos/{id}:
 *   put:
 *     summary: Actualiza un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               schedule: { type: string }
 *               address: { type: string }
 *     responses:
 *       200: { description: Actualizado }
 *       404: { description: No encontrado }
 */
router.put('/eventos/:id', updateEventoHandler);

/**
 * @openapi
 * /api/eventos/{id}:
 *   delete:
 *     summary: Elimina un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Eliminado }
 *       404: { description: No encontrado }
 */
router.delete('/eventos/:id', deleteEventoHandler);

export default router;
