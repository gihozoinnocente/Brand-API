



// import { createUserService, getAllUserService, getOneUserService, deleteOneUserService } from "../services/userServices.js"


// class UserController {
//     async createUser(req, res, next) {
//         try {
//             const data = {
//                 name: req.body.name,
//                 username: req.body.username,
//                 email: req.body.email,
//                 passworrd: req.body.password
//             }
//             console.log(data)
//             const user = await createUserService(data)
//             res.status(200).json({ status: 200, message: "User created successfully", data: user })
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     async getAllUser(req, res, next) {
//         try {
//             const users = await getAllUserService()
//             res.status(200).json({ status: 200, message: "These are all users", data: users })
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     async getUser(req, res, next) {
//         try {
//             const user = await getOneUserService(req.params.id)
//             res.status(200).json({ status: 200, message: "article retieved successfully", data: user })
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
  
// }
// export default UserController;



import  { uploadFile } from "../helpers/imageUpload.js"  
import { generateToken } from "../helpers/jwtFunctions.js"
import { comparePassword, hashPassword } from "../helpers/passwordSecurity.js"
import { userExist, createUser } from "../services/userServices.js"

class UserController {
    async register(req, res, next) {
        try {
            
            const exist = await userExist(req.body.email)
            if (exist) {
                res.status(409).json({ status: 409, message: "User with this email already exist. use different one" })
            } else {
                if (req.file) {
                    req.body.picture = await uploadFile(req)
                } else {
                    req.body.picture = 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                }
                const user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: await hashPassword(req.body.password),
                    picture : req.body.picture,
                }
                const createdUser = await createUser(user)
                res.status(201).json({ status: 201, message: "user registered successfully", user: createdUser })
            }
        } catch (error) {
            console.log(error)
        }
    }
    async login(req, res, next) {
        try {
            const exist = await userExist(req.body.email)
            if (exist) {
                const valid = await comparePassword(req.body.password, exist.password)
                if (!valid) {
                    res.status(403).json({ status: 403, message: "Invalid credentials" })
                }
                const token = await generateToken({ id: exist._id })
                res.status(200).json({ status: 200, message: "Logged in successfully", accessToken: token })
            } else {
                res.status(403).json({ status: 403, message: "Invalid credentials" })
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export default UserController;