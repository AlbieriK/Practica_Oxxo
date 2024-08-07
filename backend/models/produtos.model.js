import { Schema, model } from "mongoose";

export const esquema = new Schema({
    empresa:{type:String},
    producto:{type:String},
    clasificacion:{type:String},
    cantidad:{type:Number}
})

export const modeloProductos = new model('Productos',esquema)