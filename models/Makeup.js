import mongoose from 'mongoose'

const makeupSchema = new mongoose.Schema ({
    name: String,
    brand: String,
    productType: String,
    image: String,
    productLink: String,
    colours: [{
        hexValue: String,
        colorName: String 
    }],
    description: String
})

export default mongoose.model('makeups', makeupSchema)
