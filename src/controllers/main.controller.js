const {pool} = require('../config/conn.js');

const mainControllers = {
    home: (req, res) => {
        //console.log('Se ha lanzado la funcion home');
        pool.query('SELECT * FROM collections', (error, results) => {
          if (error) {
            console.error('Error en la consulta:', error);
            res.status(500).json({ error: 'Error en la consulta' });
          } else {
            //console.log('Resultados de la consulta:', results);
            //res.json(results);
            res.render('home', { resultados: results });
          }
        });
      },
    productsAll:(req, res)=>{
        pool.query('SELECT * FROM product', (error, results) => {
            if (error) {
                console.error('Error en la consulta:', error);
                res.status(500).json({ error: 'Error en la consulta' });
            } else {
              //console.log('Resultados de la consulta:', results);
                res.render('shop/shop', { productos: results });
            }
        });
    },
    collection: (req, res) => {
      const miParametro = req.params.miParametro;
   /*    console.log('el valor es:',miParametro); */
      pool.query('SELECT * FROM product WHERE collection = ?', [miParametro], (error, results) => {
        if (error) {
          console.error('Error en la consulta a la base de datos:', error);
          res.status(500).json({ error: 'Error en la consulta' });
        } else {
          //console.log('Resultados de la consulta:', results);
          res.render('shop/collection', { productos: results });
        }
      });
    },
    detail:(req, res)=>{
      const funko = req.params.funko;
      pool.query('SELECT * FROM product WHERE product_id = ?', [funko], (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            res.status(500).json({ error: 'Error en la consulta' });
        } else {
          //console.log('Resultados de la consulta:', results);
            res.render('shop/detail', { productos: results });
        }
    });
    },
    contact:(req, res)=>res.send('Route for contact view'),
    about:(req, res)=>res.send('Route for about view'),
    faqs:(req, res)=>res.send('Route for faqs view')
}

module.exports = mainControllers;