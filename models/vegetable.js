const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const vegetableSchema = new Schema ({
    name:{
        type : String,
        required : true

    },
    price:{
        type : Number,
        required : true
    },
    description :{
        type: String,
        required: true
    },

    Image:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Vegetable" , vegetableSchema)







