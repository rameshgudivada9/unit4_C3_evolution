const express = require("express")
const book = require("../models/book_model")

const router = express.Router()

router.post('',async(req,res)=>{
    const Book = await book.create(req.body)
    res.send({Book})
})

module.exports = router;