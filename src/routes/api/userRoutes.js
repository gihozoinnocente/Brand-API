import express from 'express'
import  UserController from './../../controllers/userController.js'
const route = express.Router()
const userControllers = new UserController()
route.post('/', userControllers.createUser)
route.get('/', userControllers.getAllUser)
route.get('/:id', userControllers.getUser)


export default route