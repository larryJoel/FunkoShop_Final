const express =  require('express');
const app = express();
const path = require('path');

/*Puerto de la aplicación */
const PORT = 4000;
const mainRoutes = require('./src/routes/main.routes.js');
const shopRoutes = require('./src/routes/shop.routes.js');
const admRoutes = require('./src/routes/admin.routes.js');
const authRoutes = require('./src/routes/auth.routes.js');

//Parsea los datos recibidos por POST
app.use(express.static('public'));
app.use(express.json());

/*Middleware a las rutas */
app.use('/', mainRoutes);
app.use('/shop',shopRoutes);
app.use('/auth/admin', authRoutes);
app.use('/adm', admRoutes);


app.use((req, res, next) => {
    const filePath = path.join(__dirname, './public/pages/404.html');
    res.status(404).sendFile(filePath);
});

app.listen(PORT, ()=> console.log('servidor corriendo en Http://localhost:'+PORT));