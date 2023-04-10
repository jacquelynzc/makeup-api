import mongoose from 'mongoose'

const colourSchema = new mongoose.Schema ({
    hexValue: String,
    colourName: String
})

const makeupSchema = new mongoose.Schema ({
    name: String,
    brand: String,
    image: String,
    productLink: String,
    description: String,
    productColors: [colourSchema]
})

export default mongoose.model('Makeup', makeupSchema)
