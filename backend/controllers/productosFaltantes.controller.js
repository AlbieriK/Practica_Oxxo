import { modeloFaltantes } from "../models/productosFaltantes.model.js";

const test = () => {
    console.log("Estas en la sección de productos faltantes c:")
}
export default test

modeloFaltantes.create({
    empresa:"Barcel",
    producto:"Takis",
    clasificacion:"fuego",
    cantidad:30
})