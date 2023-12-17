const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser')



// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// Middleware de archivos estáticos
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para archivos estáticos (public)
app.use('/img', express.static(path.join(__dirname, 'public/img')));


//para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true}))
app.use(express.json()) 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

const mainRoutes = require('./src/routes/main.routes.js');
const shopRoutes = require('./src/routes/shop.routes.js');
const admRoutes = require('./src/routes/admin.routes.js');
const authRoutes = require('./src/routes/auth.routes.js');



// Rutas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/auth', authRoutes);
app.use('/adm', admRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    const filePath = path.join(__dirname, './public/pages/404.html');
    res.status(404).sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));
