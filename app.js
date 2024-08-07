import dotenv from 'dotenv'

import mongoose from 'mongoose'

import express from 'express'

import cors from 'cors'

import testEmpleados from './backend/controllers/empleados.controller.js'

        import testGerentes from './backend/controllers/gerentes.controller.js'
               
        import testProductos from './backend/controllers/productos.controller.js'
        
        import testFaltantes from './backend/controllers/productosFaltantes.controller.js'
        
        import testPromociones from './backend/controllers/promociones.controller.js'
        
        import testRebajas from './backend/controllers/rebajas.controller.js'

dotenv.config()
mongoose.connect(process.env.url)
//promesa
.then(()=> {
    console.log("Estoy en funcionamiento")
})

.catch((error)=>{
    console.log("Error :c")
})

const app =express()
app.use(cors())

app.listen(4500,()=>{
    console.log("Estoy funcionando")
})

testEmpleados()
testGerentes()
testProductos()
testFaltantes()
testPromociones()
testRebajas()