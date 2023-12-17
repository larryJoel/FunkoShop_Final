const {pool} = require('../config/conn.js');
const adminController={
    /* admin:(req, res)=>res.render('./admin/admin'), */
    admin:(req, res)=>{
        pool.query('SELECT * FROM product', (error, results) => {
            if (error) {
                console.error('Error en la consulta:', error);
                res.status(500).json({ error: 'Error en la consulta' });
            } else {
              //console.log('Resultados de la consulta:', results);
                res.render('./admin/admin', { productos: results });
            }
        });
    },
    view:(req, res)=>res.render('./admin/create'),
    create:(req, res)=>res.render('crear productos'),
    editview:(req, res)=>res.render('./admin/edit'),
    edit:(req, res)=>res.send('edit admin'),
    delete:(req, res)=>res.send('delete admin'),
}

module.exports = adminController;
