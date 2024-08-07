import { model } from "mongoose";
import { esquema1 } from "./empleados.model.js";//importamos para resumir el codigo (en lugar de escribirlo 2 veces)//

export const modeloGerentes = new model('Gerentes',esquema1)