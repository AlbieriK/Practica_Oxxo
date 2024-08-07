import { modeloEmpleados } from "../models/empleados.model.js";

const test = () => {
    console.log("Estas en la sección de empleados")
}
export default test

modeloEmpleados.create({
    Nombre:"William agapito",
    Apellido:"Smith Perez",
    Edad:34,
    Funcion:CajeroSiuuu,
    sueldo:1500
})