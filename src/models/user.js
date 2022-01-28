import mongoose from "mongoose"

const schema = mongoose.Schema({
    name: String,
    username: String,
    password: String
})

export default mongoose.model("User", schema)