import express from 'express'
import { fileFilter } from '../../helpers/fileFilter.js'
import multer from 'multer';
import  UserControllers from '../../controllers/userController.js';

const route = express.Router()

// route.get('/', (req, res, next) => {
//     res.status(200).json({ status: 200, message: "this will return all users", data: "" })
// })


const storage = multer.diskStorage({});
const uploads = multer({ storage,fileFilter});

const userControllers =new UserControllers()

route.post('/register',uploads.single('picture'),userControllers.register)
route.post('login',userControllers.login)

export default route