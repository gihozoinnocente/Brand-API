// import User from "../models/user";
// import { UserServices } from "../services/userServices";

// export class UserController {
//     createUser(req, res, next) {

//         const user = new User({
//             name: req.body.name,
//             username: req.body.username,
//             password: req.body.password,
//             email: req.body.email
//         })
//         UserServices.createUser(user)
//         res.send(user)
//     }
// }



import { createUserService, getAllUserService, getOneUserService, deleteOneUserService } from "../services/userServices.js"


class UserController {
    async createUser(req, res, next) {
        try {
            const data = {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                passworrd: req.body.password
            }
            console.log(data)
            const user = await createUserService(data)
            res.status(200).json({ status: 200, message: "User created successfully", data: user })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllUser(req, res, next) {
        try {
            const users = await getAllUserService()
            res.status(200).json({ status: 200, message: "These are all users", data: users })
        } catch (error) {
            console.log(error)
        }
    }
    async getUser(req, res, next) {
        try {
            const user = await getOneUserService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: user })
        } catch (error) {
            console.log(error)
        }
    }
    //updateUser(req, res, next) { }
     deleteUser(req, res, next) { 
        // try {
        //     const user = await deleteOneUserService(req.params.id)
        //     res.status(200).json({ status: 200, message: "article retieved successfully", data: user })
        // } catch (error) {
        //     console.log(error)
        // }
  }
}
export default UserController;