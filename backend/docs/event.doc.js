/**
 * @swagger
 * components:
 *  schemas:
 *      Event:
 *          type: object    
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre del evento
 *              location:
 *                  type: string
 *                  description: Ubicación del evento
*          required:
 *              - name
 *              - location
 *          example:
 *              name: Campeonato de España
 *              location: Badajoz
 */
/**
 * @swagger
 * /api/events:
 *  get:
 *      summary: Obtiene un listado de todos los eventos 
 *      tags: [Event]

*      responses:
 *          200:
 *              description: Listado de eventos
 */
         
 /**
 * @swagger
 * /api/events:
 *  post:
 *      summary: Crea un nuevo evento 
 *      tags: [Event]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/Event'
 *      responses:
 *          201:
 *              description: Evento creado                             
 */   

/**
 * @swagger
 * /api/event/{id}:
 *  delete:
 *      summary: Elimina el evento identificado por el id
 *      tags: [Event]
 *      parameters:
 *          - in: path
 *            id: id 
 *            schema:
 *              type: int
 *            required: true    
 *            description: El identificador de cada evento
 *      responses:
 *          204:
 *              description: Evento eliminado  
 *          404:
 *              description: EVENT_NOT_FOUND                          
 */