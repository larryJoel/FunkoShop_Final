const shop ={
  item:(req, res)=>res.send(`Route item to the shop cart for id: ${req.params.id}`),
  additem:(req, res)=>res.send(`Route for add the current item to the shop cart for id: ${req.params.id}`),
  cart:(req, res)=>res.render('./shop/carrito'),
  addcart: (req, res)=>res.send('Route for got checkout page') 
}

module.exports = shop;