// import express from 'express'

// const route = express.Router()

// route.get('/', (req, res, next) => {
//     res.status(200).json({ status: 200, message: "this will return all queries", data: "" })
// })

// export default route

import express from 'express';
import   QueryController from './../../controllers/queriesController.js'


const route = express.Router();
const queryControllers = new QueryController()
route.post('/', queryControllers.createQuery);
route.get('/', queryControllers.getAllQuery);
route.get('/:id', queryControllers.getQuery);
route.delete('/:id', queryControllers.deleteQuery);


export default route;