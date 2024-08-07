import { Schema, model } from "mongoose";

export const esquema2 = new Schema({
    Nombre:{type:String},
    Descripcion:{type:String},
    PrecioAntes:{type:Number},
    PrecioAhora:{type:Number}
})
export const modelPromociones = new model('Promociones',esquema2)