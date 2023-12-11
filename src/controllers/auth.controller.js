const Auth ={
   login: (req, res)=>res.send('Route for auth login view'),
   addLogin:(req, res)=>res.send('Route for auth register login'),
   register:(req, res)=>res.send('Route for auth registerview'),
   addregister:(req, res)=>res.send('Route for auth register')
}

module.exports = Auth;