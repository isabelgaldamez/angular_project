const mongoose = require('mongoose');
const Product = mongoose.model('Product');
// const Movie = mongoose.model('Movie');
// const Comment = mongoose.model('Comment');


module.exports = {
    createRecord: (req, res)=>{
        console.log('Create controller', req);
        const newObj = new Product();
        // Product.create(req.body)
        newObj.name = req.body.name;
        newObj.quantity = parseInt(req.body.qty);
        newObj.price = parseInt(req.body.price);
        newObj.save()
        .then(objectData => {
            console.log('Cake has been created', objectData);
            res.json({message : 'success', data : objectData})
        })
        .catch(error => {
            console.log('Error occurred while creating', error);
            res.json({message : 'error', error : error})
        })
    },

    findAll: (req, res) => {
        console.log('findAll controller');
        Product.find({})
        .then(objectData => {
            // console.log("successfully retrieved data", objectData);
            res.json({message : 'success', data : objectData});
        })
        .catch(error => {
            console.log('Error while retrieving data');
            res.json({message : 'error', error : error});
        })
    },
   getById : (req, res)=>{
    console.log('findById controller');
        Product.findById({'_id': req.params.id})
        .then(objectData => {
            console.log('Success in retrieving details', objectData);
            res.json({message : 'success', data : objectData});
        })
        .catch(error =>{
            console.log('Error while retrieving details', error);
            res.json(error);
        })
   },
    // createComment : (req, res) =>{
    //     console.log('Create comment controller');
    //     const newComment = new Comment(req.body);
    //     // newComment.rate = parseInt(req.body.rate);
    //     // newComment.comment = req.body.comment;
    //     newComment.save()
    //     .then(createdComment => {
    //         console.log('Comment has been created', createdComment);
    //         res.json({message : 'success', data : createdComment})
    //     })
    //     .catch(error => {
    //         console.log('Error occurred while creating comment', error);
    //         res.json({message : 'error', data : error});
    //     })
    // },
    // addComment: (req, res)=>{
    //     console.log('Add comment controller');
    //     Movie.findOneAndUpdate({'_id': req.params.id}, {$push : {comments : req.body}})
    //     .then(commentAdded => {
    //         console.log("comment was added");
    //         res.json({message : 'success', data : commentAdded});
    //     })
    //     .catch(error => {
    //         console.log("Error occurred while adding a comment", error);
    //         res.json({message : 'error', data : error});
    //     })
    // },
    updateRecord: (req, res)=>{
        console.log(req.body)
        Product.findOneAndUpdate({'_id': req.params.id}, {$set : {
            name : req.body.name,
            quantity: req.body.quantity,
            price : req.body.price
            }}, {new : true})
        .then( data =>{
            console.log('Author has been updated');
            res.json({message : 'success', data : data});
        })
        .catch( error => {
            console.log("Error occurred while updating the record", error);
            res.json({message : 'error', data : error});
        })
    },
    deleteRecord:(req, res) => {
        console.log('remove controller');
        Product.remove({'_id' : req.params.id})
        .then( removedData => {
            console.log('Record has been deleted');
            res.json({message : 'success', data : removedData});
        })
        .catch(error => {
            console.log("Error occurred while deleting a record", error);
            res.json({message : 'error', data : error});
        })
    }
}