import mongoose from "mongoose"

const schema = mongoose.Schema({
    email: String,
    name: String,
    subject: String,
    message: String
})

export default mongoose.model("Query", schema)