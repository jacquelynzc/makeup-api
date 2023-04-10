import mongoose from '../db/connection.js'
const Schema = new mongoose.Schema

const makeupSchema = new Schema({
    name: String,
    brand: String,
    image: String,
    productLink: String,
    description: String,
    productColors: [colourSchema]
})

const colourSchema = new Schema({
    hexValue: String,
    colourName: String
})

export default mongoose.model('Makeup', makeupSchema)
