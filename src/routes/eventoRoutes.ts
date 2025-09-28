import express from 'express';
import {
  createEventoHandler,
  getAlleventoHandler,
  getEventoByIdHandler,
  updateEventoHandler,
  deleteEventoHandler
} from '../controller/eventoController';

const router = express.Router();

/**
 * @swagger
 *  /evento:
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
router.post('/', createEventoHandler);

/**
 * @swagger
 *  /evento:
 *   get:
 *     summary: Lista todos los eventos
 *     tags: [Eventos]
 *     responses:
 *       200: { description: OK }
 */
router.get('/', getAllEventosHandler);

/**
 * @swagger
 *  /evento/{id}:
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
router.get('/:id', getEventoByIdHandler);

/**
 * @swagger   
 *  /evento/{id}:
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
router.put('/:id', updateEventoHandler);

/**
 * @swagger
 *  /evento/{id}:
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
router.delete('/:id', deleteEventoHandler);

export default router;
