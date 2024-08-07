import { modeloProductos } from "../models/produtos.model.js";

const test = () => {
    console.log("Estas en la sección de Productos")
}
export default test

modeloProductos.create({
    nombre:"Kinder Delice",
    cantidad:300
})