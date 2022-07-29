import mongoose, {Schema} from 'mongoose'

export interface ProductType {
    id: number
    brand: string
    model: string
    price: number
    colors: string[]
    sizes: string[]
    added: Date
}

// Products schema //////
const productSchema = new Schema<ProductType>({
    brand: {type:String, required: true},
    model: {type:String, required: true},
    id: {type:Number, required: true},
    price: {type:Number, required: true},
    colors: [{type:String, required: false}],
    sizes: [{type:String, required: false}],
    added: { type: Date, default: Date.now }
})

module.exports = mongoose.model('product', productSchema)