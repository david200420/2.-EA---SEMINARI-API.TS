import { Router } from 'express';
import * as eventoController from '../controller/eventoController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "64a1f2e3..."
 *         name:
 *           type: string
 *           example: "Seminario Node"
 *         schedule:
 *           type: string
 *           example: "16:30 - 17:30"
 *         address:
 *           type: string
 *           example: "Aula 3, Edificio A"
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "64b2g3..."
 *         name:
 *           type: string
 *           example: "Juan Pérez"
 */

/**
 * @swagger
 * /event:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags:
 *       - Eventos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - schedule
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Seminario Node"
 *               schedule:
 *                 type: string
 *                 example: "16:30 - 17:30"
 *               address:
 *                 type: string
 *                 example: "Aula 3, Edificio A"
 *     responses:
 *       '201':
 *         description: Evento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 createdEvento:
 *                   $ref: '#/components/schemas/Event'
 */
router.post('/', eventoController.createEventoHandler);

/**
 * @swagger
 * /event:
 *   get:
 *     summary: Lista todos los eventos
 *     tags:
 *       - Eventos
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get('/', eventoController.getAlleventoHandler);

/**
 * @swagger
 * /event/{id}:
 *   get:
 *     summary: Obtiene un evento por ID
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento
 *     responses:
 *       '200':
 *         description: Evento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       '404':
 *         description: No encontrado
 */
router.get('/:id', eventoController.getEventoByIdHandler);

/**
 * @swagger
 * /event/{id}:
 *   put:
 *     summary: Actualiza un evento por ID
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               schedule:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Evento actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updatedEvento:
 *                   $ref: '#/components/schemas/Event'
 *       '404':
 *         description: No encontrado
 */
router.put('/:id', eventoController.updateEventoHandler);

/**
 * @swagger
 * /event/{id}:
 *   delete:
 *     summary: Elimina un evento por ID
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento a eliminar
 *     responses:
 *       '200':
 *         description: Evento eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 deletedEvento:
 *                   $ref: '#/components/schemas/Event'
 *       '404':
 *         description: No encontrado
 */
router.delete('/:id', eventoController.deleteEventoHandler);

/**
 * @swagger
 * /event/{eventoId}/user/{usuarioId}:
 *   post:
 *     summary: Añade un usuario a un evento
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a añadir
 *     responses:
 *       '200':
 *         description: Usuario añadido al evento
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updatedEvento:
 *                   $ref: '#/components/schemas/Event'
 *       '404':
 *         description: No encontrado
 */
router.post('/:eventoId/user/:usuarioId', eventoController.addUsuarioToEventoHandler);

/**
 * @swagger
 * /event/{eventoId}/user/{usuarioId}:
 *   delete:
 *     summary: Elimina un usuario de un evento
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar
 *     responses:
 *       '200':
 *         description: Usuario eliminado del evento
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updatedEvento:
 *                   $ref: '#/components/schemas/Event'
 *       '404':
 *         description: No encontrado
 */
router.delete('/:eventoId/user/:usuarioId', eventoController.removeUsuarioFromEventoHandler);

/**
 * @swagger
 * /event/{eventoId}/users:
 *   get:
 *     summary: Obtiene los usuarios de un evento
 *     tags:
 *       - Eventos
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del evento
 *     responses:
 *       '200':
 *         description: Usuarios obtenidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       '404':
 *         description: No encontrado
 */
router.get('/:eventoId/users', eventoController.getUsuariosbyEventoHandler);

export default router;
