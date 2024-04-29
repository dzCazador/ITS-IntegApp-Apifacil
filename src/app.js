const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
//app.use(morgan());
app.use(express.json());


const listUser=[
    {
      "id": 1,
      "username": "jperez",
      "email": "jperez@example.com",
      "nombre": "Juan",
      "apellido": "Perez"
    },
    {
      "id": 2,
      "username": "mgonzalez",
      "email": "mgonzalez@example.com",
      "nombre": "Maria",
      "apellido": "Gonzalez"
    },
    {
      "id": 3,
      "username": "cmartinez",
      "email": "cmartinez@example.com",
      "nombre": "Juan",
      "apellido": "Martinez"
    }
  ]


app.get('/',(req,res)=>
    res.status(200).json({
        ok:'juan',
        msg:"Hola estas accediendo a la Super API"
    })
)

app.get('/usuarios',(req,res)=>
    res.status(200).json({
        ok:true,
        lista:listUser
    })
)

app.get('/usuarios/buscar',(req,res)=>{
    const {query}=req;
    const {nombre,apellido}=query; 
        //es lo mismo que ; DESECTRUCTURACION
        // nombre = query.nombre
        // apellido = query.apellido

    
    const result = listUser.filter((u)=>u.nombre===nombre/* && u.apellido===apellido*/);

    if (result.length>0)
        res.status(200).json({
            ok:true,
            result
        })
    else
        res.status(404).json({
            ok:false,
            msg:"No Encontrado"
        })
})    

app.listen(port,()=>{
    console.log(`Servidor Corriendo en el puerto ${port}`);
});
