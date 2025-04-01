const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
 
app.use(express.json());
 
const leerJSON = (archivo) => {
    const filePath = path.join(__dirname, 'data', archivo);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};
 
app.get('/habilidades', (req, res) => {
    res.json(leerJSON('habilidades.json'));
});
 
app.get('/proyectos', (req, res) => {
    res.json(leerJSON('proyectos.json'));
});
 
app.get('/experiencia', (req, res) => {
    res.json(leerJSON('experiencia.json'));
});
 
app.get('/educacion', (req, res) => {
    res.json(leerJSON('educacion.json'));
});
 
app.get('/contacto', (req, res) => {
    res.json(leerJSON('contacto.json'));
});
 
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});