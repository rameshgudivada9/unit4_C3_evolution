const express = require("express")
const comment = require("../models/comment_model")

const router = express.Router()

router.post('',async(req,res)=>{
    const Comment = await comment.create(req.body)
    res.send({Comment})
})

module.exports = router