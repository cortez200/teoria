const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'pug');

app.engine('hbs', require('hbs').__express);
app.engine('ejs', require('ejs').renderFile);

// RUTAS

// PUG
app.get('/pug', (req, res) => {
    res.render('pug/index');
});

// HBS
app.get('/hbs', (req, res) => {
    res.render('hbs/index.hbs', { mensaje: "Bienvenidos a los motores de plantilla" });
});

// EJS
app.get('/ejs', (req, res) => {
    res.render('ejs/index.ejs', { mensaje: "Bienvenidos a los motores de plantilla" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});