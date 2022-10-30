import express from "express";

const app = express();

app.get('/teams', (req, res) => res.send("Obtener equipos"));

app.listen(6900);
console.log("Servidor corriendo en el puerto 6900");