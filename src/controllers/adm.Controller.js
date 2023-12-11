const adminController={
    admin:(req, res)=>res.send('view admin'),
    view:(req, res)=>res.send('admin view edit'),
    create:(req, res)=>res.send('create admin'),
    editview:(req, res)=>res.send('view edit admin'),
    edit:(req, res)=>res.send('edit admin'),
    delete:(req, res)=>res.send('delete admin'),
}

module.exports = adminController;
