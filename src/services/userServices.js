// import User from "../models/user.js";

// export const createUserService = async (data) => {
//     const user = await User(data)
//     user.save()
//     return user
// }

// export const getAllUserService = async () => {
//     const users = await User.find()
//     return users
// }

// export const getOneUserService = async (id) => {
//     const user = await User.findOne({ _id: id })
//     return user
// }

// export const deleteOneUserService = async (id) => {
//     const user = await User.deleteOne({ _id: id })
//     return user
// }

import User from "../models/user.js"

export const userExist = async (email) => {
    const user = await User.findOne({ email: email })
    if (user) {
        return user
    } else {
        return false
    }
}

export const createUser = async (user) => {
    const userCreated = await User(user)
    userCreated.save()
    return userCreated
}
