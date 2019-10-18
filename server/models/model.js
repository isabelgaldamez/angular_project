  
const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//     comment : {
//         type: String,
//         trim : true,
//         minlength: 3,
//         maxlength: 500,
//         required : [true, 'Blank comments cannot be submitted'],
//     },
//     rate : {
//         type : Number, 
//     }
// }, {timestamps: true});

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        trim : true,
        minlength: 3,
        maxlength: 250,
        required : [true, 'Product name should have at least 3 characters'],
    },
    quantity : {
        type : Number, 
        min: 0,
        required : [true, 'Quantity must be greater or equal to 0'],
    },
    price : {
        type : Number, 
        min: 0,
        required : [true, 'price must be greater or equal to 0'],
    },
    // image_url : {
    //     type : String, 
    // },
    // comments: [commentSchema],
}, {timestamps: true});

// mongoose.model('Comment', commentSchema);
mongoose.model('Product', productSchema);