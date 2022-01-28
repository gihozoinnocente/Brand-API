// import express from 'express'

// const route= express.Router()

// route.get('/', (req, res, next) => {
//     res.status(200).json({ status: 200, message: "this will return all users", data: "" })
// })

// export default route


import express from 'express'
import  UserController from './../../controllers/userController.js'
const route = express.Router()
const userControllers = new UserController()
route.post('/', userControllers.createUser)
route.get('/', userControllers.getAllUser)
route.get('/:id', userControllers.getUser)


export default route