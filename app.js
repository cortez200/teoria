const express = require('express');
const path = require('path');
const app = express();

// Configuración de la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configuración de los Motores de Plantilla
app.set('view engine', 'pug'); // Pug como motor por defecto
app.engine('hbs', require('hbs').__express);
app.engine('ejs', require('ejs').renderFile);

// --- 🏠 1. PÁGINA PRINCIPAL (DISEÑO PRO) ---
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Panel de Control - Adrian Cortez</title>
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    background: #f0f2f5; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    height: 100vh; 
                    margin: 0; 
                }
                h1 { color: #333; margin-bottom: 30px; }
                .container { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
                .card { 
                    background: white; 
                    padding: 25px; 
                    border-radius: 15px; 
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
                    text-decoration: none; 
                    color: #333; 
                    width: 140px; 
                    text-align: center; 
                    transition: all 0.3s ease; 
                    border-top: 5px solid #ccc; 
                }
                .card:hover { 
                    transform: translateY(-10px); 
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15); 
                }
                .pug { border-color: #5a332a; }
                .hbs { border-color: #f0772b; }
                .ejs { border-color: #b4ca65; }
                .card h2 { margin: 0; font-size: 1.4rem; }
                .card p { font-size: 0.9rem; color: #666; margin-top: 10px; }
            </style>
        </head>
        <body>
            <h1>Motores de Plantillas</h1>
            <div class="container">
                <a href="/pug" class="card pug">
                    <h2>Pug</h2>
                    <p>Ver estructura</p>
                </a>
                <a href="/hbs" class="card hbs">
                    <h2>HBS</h2>
                    <p>Ver estructura</p>
                </a>
                <a href="/ejs" class="card ejs">
                    <h2>EJS</h2>
                    <p>Ver estructura</p>
                </a>
            </div>
        </body>
        </html>
    `);
});

// --- 🚀 2. RUTAS DE LOS MOTORES ---

app.get('/pug', (req, res) => {
    // Busca en views/pug/index.pug
    res.render('pug/index'); 
});

app.get('/hbs', (req, res) => {
    // Busca en views/hbs/index.hbs
    res.render('hbs/index.hbs', { mensaje: "Bienvenidos a Handlebars (HBS)" });
});

app.get('/ejs', (req, res) => {
    // Busca en views/ejs/index.ejs
    res.render('ejs/index.ejs', { mensaje: "Bienvenidos a EJS" });
});

// --- 🌐 3. CONFIGURACIÓN DEL PUERTO PARA RENDER ---
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});