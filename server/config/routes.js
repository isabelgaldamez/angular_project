const controller = require('../controllers/controllers')
module.exports = (app) =>{
    //Get All
    app.get('/getAll', (req, res) =>{
        console.log('router for find all');
        controller.findAll(req, res);
    });
     // Create a new
     app.post('/newRecord', (req, res) =>{
        console.log('router for create new ----->', req.body)
        controller.createRecord(req, res);
    });
    // Get By ID
    app.get('/getById/:id', (req, res)=>{
        console.log(`router get by ID`,  req.params.id);
        controller.getById(req, res);
    });
   
    app.put('/updateRecord/:id', (req, res)=>{
        console.log('routers, update record', req.params.id);
        controller.updateRecord(req, res);
    })

    //Delete Record
    app.delete('/delete/:id', (req, res)=>{
        console.log('delete record ', req.params.id);
        controller.deleteRecord(req, res);
    })
}