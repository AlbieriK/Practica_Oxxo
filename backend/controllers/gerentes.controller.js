import { modeloGerentes } from "../models/gerentes.model.js";

const test = () => {
    console.log("Estas en la sección de Gerentes")
}
export default test

modeloGerentes.create({
    Nombre:"Mario Zelda",
    Apellido:"Sanchez Rgz",
    Edad:44,
    Funcion:Gerentexd,
    sueldo:15000
})