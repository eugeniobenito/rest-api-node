/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object    
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre del usuario
 *              email:
 *                  type: string
 *                  description: Email del usuario
 *              age:
 *                  type: int
 *                  description: Edad del usuario
 *              category:
 *                  type: string
 *                  description: Categoría deportiva del usuario
 *              password:
 *                  type: string
 *                  description: Contraseña del usuario
*          required:
 *              - name
 *              - email
 *              - age
 *              - category
 *          example:
 *              name: Eugenio Benito 
 *              email: eugenio@alu.ua.es
 *              age: 22
 *              category: sub23
 *              password: 1234
 */
/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Obtiene un listado de todos los usuarios 
 *      tags: [User]

*      responses:
 *          200:
 *              description: Listado de usuarios
 */
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Obtien la información del usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            id: id 
 *            schema:
 *              type: int
 *            required: true    
 *            description: El identificador de cada producto
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          id:
 *                              type: int
 *                              description: id del Usuario
 *      responses:
 *          201:
 *              description: Información del usuario  
 *          404:
 *              description: USER_NOT_FOUND                              
 */                  
 /**
 * @swagger
 * /api/users/:
 *  post:
 *      summary: Crea un nuevo usuario 
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: Usuario creado                             
 */   

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Actualiza el usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            id: id 
 *            schema:
 *              type: int
 *            required: true    
 *            description: El identificador de cada usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          id:
 *                              type: int
 *                              description: id del usuario
 *      responses:
 *          201:
 *              description: usuario actualizado  
 *          404:
 *              description: USER_NOT_FOUND                               
 */  

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Elimina el usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            id: id 
 *            schema:
 *              type: int
 *            required: true    
 *            description: El identificador de cada usuario
 *      responses:
 *          204:
 *              description: Usuario eliminado  
 *          404:
 *              description: USER_NOT_FOUND                          
 */