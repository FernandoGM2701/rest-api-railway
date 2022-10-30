import express from "express";

const app = express();

app.get('/teams', (req, res) => res.send("Obtener equipos"));

app.post('/teams', (req, res) => res.send("Crear equipos"));

app.put('/teams', (req, res) => res.send("Modificar equipos"));

app.delete('/teams', (req, res) => res.send("Eliminar equipos"));

app.listen(6900);
console.log("Servidor corriendo en el puerto 6900");