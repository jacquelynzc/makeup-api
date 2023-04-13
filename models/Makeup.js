import mongoose from 'mongoose'

const makeupSchema = new mongoose.Schema ({
    name: String,
    brand: String,
    image: String,
    productLink: String,
    description: String,
    colours: [{
        hexValue: String,
        colorName: String 
    }]
})

export default mongoose.model('makeups', makeupSchema)
