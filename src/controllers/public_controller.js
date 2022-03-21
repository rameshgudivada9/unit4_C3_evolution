const express = require("express")
const Public = require("../models/publication_model")

const router = express.Router()

router.post('',async(req,res)=>{
    const public = await Public.create(req.body)
    res.send({Comment})
})

module.exports = router