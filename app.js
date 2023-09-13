// Bibliotecas
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

// Se inicializa el servidor express
const server = express();

// Puerto en el que escuchará el servidor
const port = 1992;

// Clave secreta para el JWT
const JWT_SECRET = "ssshhhhhh!!!";

// Configuración para que el servidor interprete JSONS 
server.use(express.json());

// Configuración para que el servidor interpete las cookies
server.use(cookieParser())

// Servicio POST para autenticar usuario
server.post("/auth", (req, res) => {
    const user = {
        email: "sergio@chez.com",
        pass: "12345678"
    };

    // Recuperacióin de email y pass del cuerpo de la petición
    const { email, pass} = req.body;

    // Verificar que se envien los parametros para la autentificación
    if(!email || !pass)
        return res.status(403).send("No autorizado");

    // Verificar datos de usuario
    if(email != user.email)
        return res.status(403).send("Correo no válido");

    if(pass != user.pass)
        return res.status(403).send("Contraseña no válida");

    // Firmar datos para regresar el JWT
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: 5 });

    res.status(201).cookie("token", token).json({ login: true });
})

// Función para autorizar y validar el token enviado en la petición
const autorizar = (req, res, next) => {
    try{
        // Obtener el token de la cookie
        const token = req.cookies.token;

        // Verificar que el token es correcto
        const verify = jwt.verify(token, JWT_SECRET);

        // Se guarda el usuario en la petición
        req.user = verify;

        // Se pasa al siguiente middleware
        next();
        
    }catch(err){
        res.status(403).send("No autorizado");
    }
} 

// Servicio para regresar la información del usuario
server.get("/user", autorizar, (req, res) => {
    res.status(201).json({status: "OK", user: req.user});
});

// Se pone en escucha el servidor
server.listen(port, () => {
    console.log(`> Servidor iniciado en el puerto ${port}`);
});