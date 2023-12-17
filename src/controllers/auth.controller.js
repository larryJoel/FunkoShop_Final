const {pool} = require('../config/conn.js');

const Auth ={
   login: (req, res)=>res.render('./auth/login'),
   addLogin: (req, res) => {
      const data = req.body;
      pool.query('SELECT * FROM user WHERE email = ?',[data.email],(err,userdata)=>{
            if(userdata.length > 0){
               
               if(data.password === userdata[0].password){
                  /* res.render('./auth/login',{errorMessage:'Bienvenido'}) */
                  renderAdminPage(req, res);
               }else{
                  res.render('./auth/login',{errorMessage:'Error en el usuario o en el password'})
               }
            }else{
               res.render('./auth/login',{errorMessage:'Hay un error en su información'})
            }
         });
      },
   register:(req, res)=>res.render('./auth/register'),
   addRegister: async (req, res) => {
      const { name, lastname, email, password, confirmpassword } = req.body;
      let errorMessage = null;
      let successMessage = null;
   
      // Validaciones
      if (!name || !lastname || !email || !password || !confirmpassword) {
         errorMessage = 'Por favor, complete todos los campos.';
      } else if (password !== confirmpassword) {
         errorMessage = 'Las contraseñas no coinciden.';
      } else {
         try {
            // Validar que la contraseña cumple con tus criterios antes de la inserción
            // Por ejemplo, longitud mínima, caracteres especiales, etc.
            if (password.length < 8) {
               errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
            } else {
               // Insertar un nuevo usuario en la base de datos
               const result = await pool.execute('INSERT INTO user (name, lastname, email, password) VALUES (?, ?, ?, ?)', [
                  name,
                  lastname,
                  email,
                  password, // Aquí deberías cifrar la contraseña antes de guardarla
               ]);
   
               if (result && result[0] && result[0].affectedRows === 1) {
                  // Registro exitoso
                  successMessage = '¡Registro exitoso!';
               } else {
                  //errorMessage = 'Error al registrar el usuario. Por favor, inténtelo de nuevo.';
                  successMessage = '¡Registro exitoso!';
               }
            }
         } catch (error) {
            console.error('Error al guardar el usuario en la base de datos:', error);
            errorMessage = 'Error al registrar el usuario. Por favor, inténtelo de nuevo.';
         }
      }
   
      // Renderizar la página con el mensaje de éxito o error
      res.render('./auth/register', { errorMessage, successMessage });
   }
}

// Función para renderizar la página de administrador
function renderAdminPage(req, res) {
   pool.query('SELECT * FROM product', (error, results) => {
     if (error) {
       console.error('Error en la consulta:', error);
       res.status(500).json({ error: 'Error en la consulta' });
     } else {
       res.render('./admin/admin', { productos: results });
     }
   });
 }

module.exports = Auth;