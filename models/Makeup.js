import mongoose from 'mongoose'

const colourSchema = new mongoose.Schema ({
    hex_value: String,
    colour_name: String
})

const makeupSchema = new mongoose.Schema ({
    name: String,
    brand: String,
    image: String,
    productLink: String,
    description: String,
    product_colors: [colourSchema]
})

export default mongoose.model('Makeup', makeupSchema)
