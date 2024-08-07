import { modeloRebajas } from "../models/rebajas.model.js";

const test = () => {
    console.log("Estas en la sección de Rebajas")
}
export default test

modeloRebajas.create({
    Nombre:"Huevo Kinder",
    Descripcion:"popular producto de la marca Ferrero. Tiene una deliciosa cáscara de chocolate con un relleno cremoso de leche y contiene un juguete sorpresa",
    PrecioAntes:"30",
    PrecioAhora:"19"
})