import { modelPromociones} from "../models/promociones.model.js";

const test = () => {
    console.log("Estas en la sección de Promociones")
}
export default test

modelPromociones.create({
    Nombre:"Paleta payaso",
    Descripcion:"Paleta de malvadisco cubierto de chocolate",
    PrecioAntes:"20",
    PrecioAhora:"12"
})