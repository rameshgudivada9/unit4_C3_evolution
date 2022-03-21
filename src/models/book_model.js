const { isInteger } = require("lodash")
const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    likes:{type:Number,required:true,default:0},
    covsrImage:{type:String},
    content:{type:String,require:true},
},
{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("book",bookSchema)