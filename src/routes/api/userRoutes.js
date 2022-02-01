// import express from 'express'
// import  UserController from './../../controllers/userController.js'
// const route = express.Router()
// const userControllers = new UserController()
// route.post('/', userControllers.createUser)
// route.get('/', userControllers.getAllUser)
// route.get('/:id', userControllers.getUser)


// export default route


import express from 'express'
import multer from 'multer';
import  UserControllers from '../../controllers/userController.js';
import { fileFilter } from '../../helpers/fileFilters.js';
import { userValidation } from '../../validations/userValidation/user.validation.js';

const route = express.Router()
const storage = multer.diskStorage({});

const uploads = multer({ storage, fileFilter });
const userControllers = new UserControllers()
route.post('/register', uploads.single('picture'), userValidation, userControllers.register)
route.post('/login', userControllers.login)

export default route



